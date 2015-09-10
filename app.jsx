;(function () {
	var Editor = React.createClass({
		getInitialState: function () {
			return {
				input: "{\n\ta: 'little',\n\t\"example\": 1,\n}\n",
				output: null,
			}
		},

		_onInputChange: function (event) {
			var value = event.target.value
			this.setState(function (state) {
				state.input = value
			})
		},

		_convert: function () {
			var json = JSON.stringify(eval('(' + this.state.input + ')'))
			this.setState(function (state) {
				state.output = json
			})
		},

		render: function () {
			return (
				<div>
					<textarea className="form-control" rows="5" defaultValue={this.state.input} onChange={this._onInputChange}>
					</textarea>
					<br/>

					<button className="btn btn-primary" onClick={this._convert}>
						<span className="glyphicon glyphicon-repeat" aria-hidden="true"></span>
						&nbsp; Convert
					</button>
					<br/>
					<br/>

					<textarea className="form-control" rows="5" readOnly value={this.state.output}>
					</textarea>
				</div>
			)
		},
	})

	React.render(<Editor/>, document.getElementById('content'));
})()
