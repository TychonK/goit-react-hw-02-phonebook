function ListItems({ arr, filter, deleteContact }) {
    const listMarkup = arr.filter((val) => {
        if (filter === "") {
            return val
        } else if (val.name.toLowerCase().includes(filter.toLowerCase())) {
            return val
        }
    }).map((val, index) => {
        return (
            <li key={index}>{val.name}: {val.number}
                <button className="delete-button" id={val.name} type="button" onClick={deleteContact}>Delete</button>
            </li>
            
        )
    })     
    return (
        listMarkup
    )
}

export default ListItems;