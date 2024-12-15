import { Div } from "../../styles";
import { categoriesData } from "../../templatesData";

function CategoriesList () {

    const categories = categoriesData;

    return (
        <>
            {
                categories.map((category) => (
                    <Div key={category.id}>
                        <h4>{category.title}</h4>
                    </Div>
                ))
            }
        </>
    )
};

export default CategoriesList;