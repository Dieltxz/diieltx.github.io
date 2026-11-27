const { createApp, nextTick } = Vue;

// Reemplaza esto con la URL de tu Realtime Database (sin barra al final)
const DB_URL = "https://dieltxz.github.io/diieltx.github.io/index5.html.firebaseio.com";

createApp({
    data() {
        return {
            alumnos: [],
            nuevo: {
                nombre: ""
            },
            buscar: "",
            mensaje: "",
            alumnoQR: null,
            scanner: null,
            procesando: false,
            timerSync: null
        };
    },
    computed: {
        alumnosFiltrados() {
            return this.alumnos.filter(alumno =>
                alumno.nombre.toLowerCase().includes(this.buscar.toLowerCase())
            );
        }
    },
    methods: {
        async cargarAlumnos() {
            try {
                const res = await fetch(`${DB_URL}/alumnos.json`);
                const data = await res.json();

                if (!data) {
                    this.alumnos = [];
                    return;
                }

                this.alumnos = Object.entries(data).map(([firebaseKey, item]) => ({
                    firebaseKey,
                    id: item.id,
                    nombre: item.nombre,
                    atendido: Boolean(item.atendido)
                }));
            } catch (error) {
                this.mensaje = "Error al cargar la lista de alumnos";
            }
        },
        async agregarAlumno() {
            const nombreLimpio = this.nuevo.nombre.trim();
            if (!nombreLimpio) {
                alert("Ingresa el nombre del alumno");
                return;
            }

            const nuevoAlumno = {
                id: Date.now(),
                nombre: nombreLimpio,
                atendido: false
            };

            try {
                const res = await fetch(`${DB_URL}/alumnos.json`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(nuevoAlumno)
                });
                const creada = await res.json();

                this.alumnos.push({
                    firebaseKey: creada.name,
                    ...nuevoAlumno
                });
                this.nuevo.nombre = "";
                this.mensaje = `Alumno ${nombreLimpio} agregado`;
            } catch (error) {
                this.mensaje = "No se pudo guardar el alumno en la nube";
            }
        },
        async marcarAtendido(alumno) {
            if (alumno.atendido) {
                this.mensaje = "Este alumno ya fue atendido";
                return;
            }

            try {
                await fetch(`${DB_URL}/alumnos/${alumno.firebaseKey}.json`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ atendido: true })
                });

                alumno.atendido = true;
                this.mensaje = `${alumno.nombre} ha sido atendido`;
            } catch (error) {
                this.mensaje = "No se pudo actualizar el estado";
            }
        },
        buscarPorQR(codigo) {
            const alumno = this.alumnos.find(item =>
                String(item.id) === codigo.trim()
            );

            if (!alumno) {
                this.mensaje = "Alumno no encontrado";
                return;
            }

            if (alumno.atendido) {
                this.mensaje = `${alumno.nombre} ya fue atendido`;
                return;
            }

            this.marcarAtendido(alumno);
        },
        async iniciarScanner() {
            if (this.scanner) return;

            this.scanner = new Html5Qrcode("reader");

            try {
                await this.scanner.start(
                    { facingMode: "environment" },
                    {
                        fps: 10,
                        qrbox: {
                            width: 250,
                            height: 250
                        }
                    },
                    codigo => {
                        if (this.procesando) return;

                        this.procesando = true;
                        this.buscarPorQR(codigo);

                        setTimeout(() => {
                            this.procesando = false;
                        }, 2000);
                    }
                );
                this.mensaje = "";
            } catch (error) {
                this.scanner = null;
                this.mensaje = "No se pudo activar la cámara (revisa permisos o usa localhost/HTTPS)";
            }
        },
        async detenerScanner() {
            if (this.scanner) {
                try {
                    await this.scanner.stop();
                    await this.scanner.clear();
                } catch (error) {}

                this.scanner = null;
            }
        },
        async generarQR(alumno) {
            this.alumnoQR = alumno;

            await nextTick();

            const contenedor = document.getElementById("codigoQR");
            if (!contenedor) return;
            contenedor.innerHTML = "";

            new QRCode(contenedor, {
                text: String(alumno.id),
                width: 200,
                height: 200
            });
        }
    },
    async mounted() {
        await this.cargarAlumnos();
        // Actualiza la lista cada 3 segundos para reflejar cambios de otro dispositivo
        this.timerSync = setInterval(() => {
            this.cargarAlumnos();
        }, 3000);
    },
    beforeUnmount() {
        clearInterval(this.timerSync);
        this.detenerScanner();
    }
}).mount("#app");