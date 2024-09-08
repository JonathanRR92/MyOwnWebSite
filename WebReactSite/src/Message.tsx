
function Message() {
    //JSX javascript XML, JSX allows to create Dynamic Content 
    const name = 'Mosh';
    if (name)
        return <h1> Hello {name}</h1>; 
    return <h1>Hello World</h1>;

}

export default Message;
