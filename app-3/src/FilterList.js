import React from 'react';

export default class FilterList extends React.Component {
    constructor(){
        super();
        this.state = {
            data: "que de no a la el es y en lo un por qué me una te los se con para mi está si bien pero yo eso las sí su tu aquí del al como le más esto ya todo esta vamos muy hay ahora algo estoy tengo nos tú nada cuando ha este sé estás así puedo cómo quiero sólo soy tiene gracias o él bueno fue ser hacer son todos era eres vez tienes creo ella he ese voy puede sabes hola sus porque dios quién nunca dónde quieres casa favor esa dos tan señor tiempo verdad estaba mejor están va hombre usted mucho hace entonces siento tenemos puedes ahí ti vida ver alguien sr hasta sin mí solo años sobre decir uno siempre oh ir cosas también antes has ni mis día estar estamos noche nadie otra quiere parece nosotros poco padre trabajo gente mira vas sea les donde mismo hecho ellos dijo pasa dinero hijo tal otro hablar seguro claro estas lugar mundo amigo espera mierda han tus sabe después momento desde fuera cosa tipo mañana podemos dije gran necesito estado podría acuerdo papá tener dice mío crees buena gusta nuestro nuevo será haciendo días nombre buen había ven tres menos debe tenía mal conmigo madre hoy quien sido mamá tienen luego todas allí toda hora mujer visto haces importa contigo ve tarde oye parte haber hombres problema mas saber quería aún veces nuestra hacerlo cada hizo veo tanto razón ustedes idea esos van quizá debo alguna cierto ud muerto unos estos salir policía realmente demasiado familia pueden cabeza hemos amigos chica cariño lado allá entre minutos digo algún serio cuidado pasó buenas somos amor puerta ves vaya ah suerte eh rápido cuenta quizás esas pues pasado pensé todavía hermano debes casi forma aqui chico ok dicho nueva sabía muchas dentro hice contra auto camino ayuda primera hacia vi miedo adiós primero debería poder niños sería historia hey mientras ciudad dijiste espero cuánto esposa pronto chicos cualquier viejo debemos deja año muerte hablando manos da loco problemas mano guerra semana pasar vale cuál viene volver toma caso agua haré vete entiendo horas personas capitán adelante niño listo noches buenos iba juntos dame único déjame cerca otros sigue grande arriba jefe habla supongo manera quieren feliz significa sangre fin bajo llama venir morir importante hiciste ojos escucha entrar ningún corazón diablos necesitamos atrás durante dices nuestros persona abajo dr hija dejar necesita llegar hago señora haya suficiente doctor gustaría tierra cara siquiera genial cree supuesto tomar equipo justo juego ninguna matar cinco dicen amo cuándo pequeño algunos conozco clase maldito unas muchos hubiera segundo aunque pueda dime igual comida ay cuerpo encontrar fuerte vuelta venga creer realidad saben puta deberías pregunta fui cuatro sra primer trabajar e hagas alto maldita comer número dar necesitas oportunidad punto misma última afuera mujeres pensar fueron difícil vivir paso malo estabas vivo haga queda hijos mayor fiesta hacen medio algunas basta arma vino meses cuarto éste escuela esté dólares tío posible tuve fácil preocupes luz eran carajo final lista trata armas hermana exactamente chicas podía bastante seguridad pasando esperando acá teléfono perro fuego murió tampoco sola estuvo verte iré tenido culpa veras adónde buscando cuanto padres paz demonios estará cual perdón asi jugar pensando esperar sabemos recuerdo par joven seguir pueblo tenga caballeros idiota dio minuto bebé única lejos nuestras plan pienso sentido dormir digas palabra correcto control vemos entiendes país seis último ésta diga podrías pequeña cállate trato rey sucede muchachos jamás cama srta ayudar acerca di cambio falta hospital lleva presidente mil gusto conoces diciendo os ido general extraño semanas coche peor mucha disculpe diré anoche perder vámonos nave cielo habrá orden segura querida niña increíble además deben libro calle café piensas hacemos especial queremos irme perfecto buscar odio piensa oficina hablas libre agente york llamar mala detrás viste dile grandes recuerdas real estaban mía frente perdido llamo muertos millones asesino sueño quisiera habría hará viaje probablemente resto estaré maldición lamento muchacho avión ropa fuerza llamado oído dado encima negro usar información uds preguntas tuvo secreto vuelve miren quieras haría acaba otras incluso sientes deberíamos haz decirte boca dolor baño adentro profesor habitación daño tuyo seas noticias demás querido duro poner prueba mire tonto campo siendo diez ése tranquilo asunto acabó quédate derecho placer recuerda estuve tratando ejército futuro llevar compañía venido listos haremos sitio verlo puesto atención sino cambiar error blanco raro palabras llegó sal pase mente sistema película anda ello negocio novia permiso creí suena ocurre oficial espere aire mató regresar vio hazlo trasero grupo entendido señorita música perra conoce empezar siente acabo estúpido diferente traje modo encontré mensaje llamada navidad eras pena largo entra piso foto dijeron médico accidente fuiste imposible podríamos línea propia barco ganar normal segundos vive mitad quiera tras decirle lindo funciona programa vine abre sean pagar fotos centro supone basura situación mejores vienen encanta marido personal maestro hambre ataque culo dale pie conseguir trabajando gracioso dejó pudo derecha izquierda próxima pobre respuesta tipos sentir tenías pude darle voz amiga gustan vista salvo loca hotel hicieron ten temo señal pelo llevo ayer das nena servicio tren bonito mes tendrá tendrás edad ellas hermosa honor simplemente llamas tengas corre baja sol siéntate dan humano divertido sexo vuelto peligro mesa siguiente hablo disculpa decirme caja negocios misión silencio sale llegado estaría regreso media estan propio oro enseguida linda prometo esposo norte hubo juro muerta interesante pensaba busca terminar tendré completamente cita siete cumpleaños abogado alrededor cerebro porqué llave santo hermoso necesario edificio irnos aun tendremos vayas doy trae salió ley ahi verdadero pelea banco terrible calma cena daré gobierno comprar creen sargento destino existe hacía novio sala través regalo iglesia decía cualquiera excelente esperen deseo alma diablo deje cuántos espada estábamos carne maravilloso vidas sucedió oí peligroso dirección libertad jesús ocurrió veré sueños pudiera detective sorpresa tuya pies club terminado infierno creía luna salvar carta estés cielos teniente encuentra veamos quise escúchame necesitan ambos decisión enemigo hicimos dulce pruebas querías abuelo totalmente mirando vayan carrera".split(" ").sort(function (a, b) {
                    if (a > b) {
                        return -1;
                    }
                    if (b > a) {
                        return 1;
                    }
                    return 0;
                }),
            dataFiltered: [],
            userInput: []
        }
    }

    handleChange(e) {
        this.setState({ userInput: e.target.value} ) 
        this.filterVerbs(e.target.value)
    }

    filterVerbs(userInput) {
        let filtered = this.state.data.filter( (w) => (userInput === w.slice(0,userInput.length)))
        this.setState({ dataFiltered: filtered})
    }

    render(){
        let mappedData = this.state.dataFiltered.map(el => (
            <div>
                <h3>{el}</h3>
            </div>
        ))
        return (
            <div>
                <input onChange= { (e) => this.handleChange(e) }/>
                { mappedData }
            </div>
            
        )
    }
}