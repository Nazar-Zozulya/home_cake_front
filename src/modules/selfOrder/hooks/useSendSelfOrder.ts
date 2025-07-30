import { User } from "../../user"

export async function SendSelfOrder(user: User, descriptionOrder: string) {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_SERVER_URL}/api/order/self`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},

				body: JSON.stringify({
					user,
					descriptionOrder,
				}),
			}
		)

        const result = response.json()

        return result
	} catch (err) {
		console.log(err)
		return err
	}
}
