import React, { Component } from 'react';
export default class FormDataComponent extends Component {
    userData;
    constructor(props) {
        super(props);
        this.onChangeFirst = this.onChangeFirst.bind(this);
        this.onChangeLast = this.onChangeLast.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            first: "",
            last: "",
            email: "",
            phone: ""
        }
    }
    // send to api

    // Form Events
    onChangeFirst(e) {
        this.setState({ first: e.target.value })
    }
    onChangeLast(e) {
        this.setState({ last: e.target.value })
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }
    onSubmit(e) {

        e.preventDefault()
        this.createEmployee({
            first_name: this.state.first,
            last_name: this.state.last,
            email: this.state.email,
            phone: this.state.phone
        })
        console.log(this.state)
        // this.setState({
        //     first: "",
        //     last: "",
        //     email: "",
        //     phone: ""
        // })

    }
    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                first: this.userData.first,
                last: this.userData.last,
                email: this.userData.email,
                phone: this.userData.phone
            })
        } else {
            this.setState({
                first: "",
                last: "",
                email: "",
                phone: ""
            })
        }
    }
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render() {
        return (
            <div className="container">
                {this.state.first}
                {this.state.last}
                {this.state.email}
                {this.state.phone}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First</label>
                        <input type="text" className="form-control" value={this.state.first} onChange={this.onChangeFirst} />
                    </div>
                    <div className="form-group">
                        <label>Last</label>
                        <input type="text" className="form-control" value={this.state.last} onChange={this.onChangeLast} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}