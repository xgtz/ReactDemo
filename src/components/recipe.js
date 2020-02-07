import IngredientList from './ingredientList'
import Instruction from './instructions'

const Recipe = ({name,ingredients,steps}) => 
    <section id={name.toLowerCase().replace(/ /g,'-')}>
        <h1>{name}</h1>
        <IngredientList list={ ingredients} />
        <Instruction title="Cooking Instructions" steps={steps} />
    </section>

export default Recipe    