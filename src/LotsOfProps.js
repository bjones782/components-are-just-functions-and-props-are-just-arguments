function LotsOfProps({pizzaTopping, icecream, scoops, array}) {


    return(
        <div>
            <p>I love {pizzaTopping} on my pizza.</p>
            <p>My favorite icecream is {icecream} and I ate {scoops} scoops.</p>
            {array.map(num => {
               return <li>{num}</li>
            })}
        </div>
    )
}

export default LotsOfProps
