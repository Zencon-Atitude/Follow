function helloWorld(...args) {
    for(let i = 0; i < args.length; i++)
    {
        args[i]()
        
    }
    console.log('Hello, world!');
}