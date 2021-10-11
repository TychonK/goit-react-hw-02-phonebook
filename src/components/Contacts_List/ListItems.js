import { v4 as uuid } from 'uuid'
const liKey = uuid();
function ListItems({ arr }) {
    const listMarkup = arr.map((arrItem) => {
        return (
            <li key={liKey}>{arrItem.name}: { arrItem.number}</li>
        )
    })
    return (
        listMarkup
    )
}

export default ListItems;