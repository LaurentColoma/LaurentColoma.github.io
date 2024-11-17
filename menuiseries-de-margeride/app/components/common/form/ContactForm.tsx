import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";

import {
	Button,
	Card,
	FormControl,
	Input,
	InputLabel,
	TextField,
} from "@mui/material";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
	const emailRef = useRef<HTMLInputElement>();
	const nameRef = useRef<HTMLInputElement>();
	const [message, setMessage] = useState<string>("");

	useEffect(() => emailjs.init("_puWsVA-SydTzQEV4"), []);

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const serviceId = "service_555v1hq";
		const templateId = "template_ru1b2q3";

		try {
			await emailjs.send(serviceId, templateId, {
				name: nameRef.current?.value,
				recipient: emailRef.current?.value,
				message: message,
			});
			console.log("success");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Card>
			<form onSubmit={handleSubmit} className={classes.form}>
				<div className={classes.formHeader}>
					<FormControl>
						<InputLabel htmlFor="name">Nom/Prénom</InputLabel>
						<Input id="name" ref={nameRef} />
					</FormControl>

					<FormControl>
						<InputLabel htmlFor="email">Email</InputLabel>
						<Input id="email" ref={emailRef} />
					</FormControl>
				</div>

				<FormControl>
					<TextField
						id="message"
						multiline
						minRows={4}
						maxRows={6}
						placeholder="tapez votre message ici..."
						onChange={(e) => setMessage(e.target.value)}
					/>
				</FormControl>

				<Button type="submit">Envoyer</Button>
			</form>
		</Card>
	);
};

export default ContactForm;
