const CodeWrapper = (str) => {
    return <div>
        prewrap
        ```{str}```
        did it wrap?
        <button>send</button>
    </div>
}