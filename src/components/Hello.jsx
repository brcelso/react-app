function Hello(props) {
    return (
    <div>    
    <h1>Hello Ueld!</h1>
    <h1>=D</h1>
    </div>
    );
}

export default Hello;

/*#Components + Props
entende-se que o a variavel e armazenada
dentro do componente, porem a 
informacao esta sendo passada pelo APP
manualmente, quem define o que vai ser 
passado e o APP, mas pode ser outra 
abordagem que vamos entender no futuro.

add props direto na funcao
function Hello {message, emoji, name}
desestruturar props
 {message} {name}
const { message, emoji, name } = props;
adicionar props no componente
function Hello(props) {}
mostrar o props no console se o app definir 
app - <Hello name=Celso message="Hello!" />
console.log(props);
mostrar o props no app
<h1> {props.name} {props.message }</h1>

#o react so retorna 2 ou mais valores se 
estiver dentro do div

#atribuir const para mostrar no componente
const name = "Celso";
return <h1> {name} </h1>;

#atribuir uma funcao para mostrar no componente
function displayMessage() {
 } return "Wow";
 return <h1> {displayMessage()} </h1>
 */