import React from 'react'
import Band from './Band'

class Bands extends React.Component{

    renderBand = () =>{
        if(this.props.bands.length > 0){
        return this.props.bands.map(band =>{
            return <Band band={band} delete={this.props.delete}/>
        })
    }
    }
    render(){
        return <div>

            {this.renderBand()}
        </div>
    }

}

export default Bands