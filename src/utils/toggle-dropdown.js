const toggleDropDown = (op) => {
    const e = document.getElementsByClassName("dropdown")[0]
    const display = ["block", "hidden"]
    if(display[op] == "block"){
        e.classList.remove("hidden")
    }else{
        e.classList.add("hidden")
    }
}
export default toggleDropDown