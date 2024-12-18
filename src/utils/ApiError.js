class   ApiError    extends Error{
    constructor(
        status,
        message="Somthing went wrong",
        error=[],
        stack=""
    ){
        super(message);
        this.status = status;
        this.message = message;
        this.error = error;
        this.stack = stack; 
        this.data=null
    }
    }

