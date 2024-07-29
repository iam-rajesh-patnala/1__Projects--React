import "./App.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const App = () => {
	const [formData, setFormData] = useState({
		id: "",
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		password: "",
		confirmPassword: "",
	});

	const [dataRecords, setDataRecords] = useState([]);

	const handelUserInput = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
			id: uuid(),
		});
	};

	const handelUserData = (event) => {
		event.preventDefault();

		// Checking if Password and Confirm Password match
		if (formData.password !== formData.confirmPassword) {
			alert("Passwords do not match");
			return;
		}

		setDataRecords([...dataRecords, formData]);
		setFormData({
			id: "",
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			password: "",
			confirmPassword: "",
		});
	};

	return (
		<>
			<div className="form-container">
				<h1 className="form-title">Registration Form</h1>
				<form
					onSubmit={(event) => handelUserData(event)}
					className="form"
					autoComplete="off"
				>
					{/* First Name Section */}
					<div className="form-group">
						<label htmlFor="firstName">First Name</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							placeholder="Enter your first name"
							required
							value={formData.firstName}
							// onChange={(event) =>
							// 	setFormData({
							// 		...formData,
							// 		firstName: event.target.value,
							// 	})
							// }
							onChange={(event) => handelUserInput(event)}
						/>
					</div>

					{/* Last Name Section */}
					<div className="form-group">
						<label htmlFor="lastName">LastName</label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							placeholder="Enter your last name"
							required
							value={formData.lastName}
							// onChange={(event) => {
							// 	setFormData({
							// 		...formData,
							// 		lastName: event.target.value,
							// 	});
							// }}
							onChange={(event) => handelUserInput(event)}
						/>
					</div>

					{/* Email Section */}
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Enter your email"
							required
							value={formData.email}
							// onChange={(event) => {
							// 	setFormData({
							// 		...formData,
							// 		email: event.target.value,
							// 	});
							// }}
							onChange={(event) => handelUserInput(event)}
						/>
					</div>

					{/* Phone Number Section */}
					<div className="form-group">
						<label htmlFor="phoneNumber">Phone Number</label>
						<input
							type="tel"
							name="phoneNumber"
							id="phoneNumber"
							placeholder="Enter your phone number"
							required
							value={formData.phoneNumber}
							// onChange={(event) => {
							// 	setFormData({
							// 		...formData,
							// 		phoneNumber: event.target.value,
							// 	});
							// }}
							onChange={(event) => handelUserInput(event)}
						/>
					</div>

					{/* Password Section */}
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Enter your password"
							required
							value={formData.password}
							// onChange={(event) => {
							// 	setFormData({
							// 		...formData,
							// 		password: event.target.value,
							// 	});
							// }}
							onChange={(event) => handelUserInput(event)}
						/>
					</div>

					{/* Confirm Password Section */}
					<div className="form-group">
						<label htmlFor="confirmPassword">
							Confirm Password
						</label>
						<input
							type="password"
							name="confirmPassword"
							id="confirmPassword"
							placeholder="Confirm your password"
							required
							value={formData.confirmPassword}
							// onChange={(event) => {
							// 	setFormData({
							// 		...formData,
							// 		confirmPassword: event.target.value,
							// 	});
							// }}
							onChange={(event) => handelUserInput(event)}
						/>
					</div>

					<button type="submit">Submit</button>
				</form>
				{/* Data Records Section */}
				<div className="data-records">
					<h1 className="data-title">Data Records</h1>
					{dataRecords.map((data, index) => (
						<div key={index}>
							<h3 className="user-data">User Data: {index + 1}</h3>
							<p>ID: {data.id}</p>
							<p>First Name: {data.firstName}</p>
							<p>Last Name: {data.lastName}</p>
							<p>Email: {data.email}</p>
							<p>Phone Number: {data.phoneNumber}</p>
							<p>Password: {data.password}</p>
							<p>Confirm Password: {data.confirmPassword}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default App;
