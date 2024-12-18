class apiResponsive {
    constructor(status, message="Success", data) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.sccess = status < 400
    }
}

export default apiResponsive