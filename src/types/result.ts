export type Error = {
	status: "error"
	message: string
}

export type Success<T> = {
    status: "success"
    data: T
}

export type Result<T> = Success<T> | Error