import React from "react";
import { useFormik } from "formik";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
	const errors = {};
	if (!values.Name) {
		errors.Name = "Required";
	} else if (values.Name.length > 15) {
		errors.Name = "Must be 15 characters or less";
	}

	if (!values.email) {
		errors.email = "Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}

	return errors;
};

const Login = () => {
	const formik = useFormik({
		initialValues: {
			Name: "",
			email: "",
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<div className="bg-white absolute right-0 w-1/3 h-[90vh] flex justify-center items-center">
			<form
			onSubmit={formik.handleSubmit}
			className=" px-3 py-2 h-2/4 md:w-3/4 shadow-lg"
		>
			<div className="my-2">
				<p className="font-bold my-2">
					<label htmlFor="Name">First Name</label>
				</p>
				<input
					id="Name"
					name="Name"
					type="text"
					className="border-2 border-gray-400 outline-none rounded-sm w-full p-2"
					onChange={formik.handleChange}
					value={formik.values.Name}
				/>
				{formik.errors.Name ? (
					<div className="text-red-600">{formik.errors.Name}</div>
				) : null}
			</div>

			<div className="mb-2">
				<p className="font-bold my-2">
					<label htmlFor="email">Email Address</label>
				</p>
				<input
					id="email"
					name="email"
					type="email"
					className="border-2 border-gray-400 outline-none rounded-sm w-full p-2"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				{formik.errors.email ? (
					<div className="text-red-600">{formik.errors.email}</div>
				) : null}
			</div>

			<button
				type="submit"
				className="px-1 py-2 my-2 bg-gray-900 rounded-md text-white  w-full"
			>
				Submit
			</button>
		</form>
		</div>
	);
};
export default Login;
