import { FC } from 'react'



import Statistics from './Statistics/Statistics'
import AdminNavigation from "@components/AdminNavigation/AdminNavigation";
import Heading from "@components/Headings/Heading";

const Admin: FC = () => {
	return (
		<>
			<AdminNavigation />
			<Heading title="Some statistics" />

			<Statistics />
		</>

	)
}

export default Admin
