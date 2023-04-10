import React from 'react';
import styles from '../TaskTwo/TaskTwo.module.scss';

class TaskTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            login: '',
            isFormValid: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.validateForm()) {
            console.log(this.state);
            console.log('submit success');
        }
    }

    validateForm() {
        const { firstName, lastName, login } = this.state;
        let isFormValid = true;
        if (firstName.trim() === '' || lastName.trim() === '' || login.trim() === '') {
            isFormValid = false;
        }
        this.setState({ isFormValid });
        return isFormValid;
    }

    render() {
        const { isFormValid } = this.state;
        return (
            <form className={`${styles['my-form']} ${!isFormValid ? styles['invalid-form'] : ''}`} onSubmit={this.handleSubmit}>
                <p className={styles['input-paragraph']}>
                    <label>
                        First Name:
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    </label>
                </p>
                <p className={styles['input-paragraph']}>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    </label>
                </p>
                <p className={styles['input-paragraph']}>
                    <label>
                        Login:
                        <input type="text" name="login" value={this.state.login} onChange={this.handleChange} />
                    </label>
                </p>
                <input className={styles['sub']} type="submit" value="Submit" />
            </form>
        );
    }
}

export default TaskTwo;