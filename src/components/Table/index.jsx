import styles from "./styles.module.css";

const Table = ({ customers }) => {

    return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.fName}>First Name</p>
				<p className={styles.lName}>Last Name</p>
				<p className={styles.cName}>Company Name</p>
			</div>
			{customers.map((customer) => (
				<div className={styles.customer} key={customer._id}>
					<div className={styles.title_container}>
						<p className={styles.first_name}>
							{customer.fName}
						</p>
					</div>
					<div className={styles.company_container}>
                        <p className={styles.last_name}>
							{customer.lName}
						</p>
					</div>
					<div className={styles.company_container}>
						<p className={styles.company}>{customer.company}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Table;