import React, { Component } from 'react'

export default class Grip extends Component {
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        if (numbers[0]) classes += `col-xs-${cols[0]}`
        if (numbers[1]) classes += ` col-sm-${cols[1]}`
        if (numbers[2]) classes += ` col-md-${cols[2]}`
        if (numbers[3]) classes += ` col-lg-${cols[3]}`

        return classes
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}