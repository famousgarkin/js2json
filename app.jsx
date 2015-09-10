;(function () {
	var Editor = React.createClass({
		getInitialState: function () {
			var input = "{\n\ta: 'little',\n\t\"example\": 1,\n}\n"
			return {
				input: input,
				output: this._convert(input),
				error: null,
			}
		},

		_convert: function (js) {
			return JSON.stringify(eval('(' + js + ')'), null, '\t')
		},

		_onInputChange: function (e) {
			var value = e.target.value
			this.setState(function (state) {
				state.input = value
			})
		},

		_onConvertClick: function () {
			var json = null
			var error = null
			try {
				json = this._convert(this.state.input)
			} catch (e) {
				error = e.toString()
			}
			this.setState(function (state) {
				state.output = json
				state.error = error
			})
		},

		render: function () {
			return (
				<div>
					<textarea className="form-control" rows="5" defaultValue={this.state.input} onChange={this._onInputChange}>
					</textarea>
					<br/>

					<button className="btn btn-primary" onClick={this._onConvertClick}>
						<span className="glyphicon glyphicon-repeat" aria-hidden="true"></span>
						&nbsp; Convert
					</button>

					&nbsp;
					&nbsp;
					<span className="text-danger">{this.state.error}</span>
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
