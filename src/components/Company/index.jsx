
import styles from "./styles.module.css";

const Company = ({ companies, filterCompany, setFilterCompany }) => {
	const onChange = ({ currentTarget: input }) => {
		if (input.checked) {
			const state = [...filterCompany, input.value];
			setFilterCompany(state);
		} else {
			const state = filterCompany.filter((val) => val !== input.value);
			setFilterCompany(state);
		}
	};

	return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Filter By Company Name</h1>
            <div className={styles.company_container}>
                <select onChange={onchange}>
                    <option value="">All</option>

                    {companies.map((company) => (
                        <option key={company.id} value={company.companyName[0]}>
                            {company.companyName[0]}
                        </option>

                    ))}
                </select>
            </div>
    </div>
	);
};

export default Company;
