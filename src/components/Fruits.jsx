import Fruit from "./Fruit";
export default function Fruits() {
    
    //const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
    const fruits =[
      { name:"Apple",price:10,emoji: "🍎" },
      { name:"Mango",price:7,emoji: "🥭" },
      { name:"Banana",price:2,emoji: "🍌" },
      { name:"Orange",price:5,emoji: "🍎" },
      { name:"Pineapple",price:8,emoji: "🍍" },
    ];
    return (
        
    <div>
       <ul>
         {fruits.map((fruit) => (
            <Fruit 
            key={fruit.name}
            name={fruit.name}
            price={fruit.price} 
            emoji={fruit.emoji} 
            />
         ))}
       </ul>
    </div>
      );
}

/*
rendering manually
<li key={fruit.name}>
               {fruit.emoji} {fruit.name} ${fruit.price}
            </li>
*/
/*rendering array
<ul>
        {fruits.map((fruit) => (
        <li key={fruit.name}>
         {""}
         {fruit.emoji} {fruit.name} ${fruit.price}
        </li>
        ))}
       </ul>
*/