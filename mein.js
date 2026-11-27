const { createApp, nextTick } = Vue;

createApp({
    data() {
        return {
            alumnos: JSON.parse(localStorage.getItem("alumnos") || "[]"),
            nuevo: {
                nombre: ""
            },
            buscar: "",
            mensaje: "",
            alumnoQR: null,
            scanner: null,
            procesando: false
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
        guardar() {
            localStorage.setItem("alumnos", JSON.stringify(this.alumnos));
        },
        agregarAlumno() {
            if (!this.nuevo.nombre.trim()) {
                alert("Ingresa el nombre del alumno");
                return;
            }

            this.alumnos.push({
                id: Date.now(),
                nombre: this.nuevo.nombre.trim(),
                atendido: false
            });

            this.nuevo.nombre = "";
            this.guardar();
        },
        marcarAtendido(alumno) {
            if (alumno.atendido) {
                this.mensaje = "Este alumno ya fue atendido";
                return;
            }

            alumno.atendido = true;
            this.guardar();
            this.mensaje = `${alumno.nombre} ha sido atendido`;
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
    mounted() {
        this.guardar();
    },
    beforeUnmount() {
        this.detenerScanner();
    }
}).mount("#app");