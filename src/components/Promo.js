import React, {Component} from 'react';

export default class Promo extends Component {
    render() {
        const windowHeihg = document.documentElement.clientHeight;
        const header = document.querySelector('.header');
        const sectionHeaderHeight = header.clientHeight;
        const sectionPromoHeight = windowHeihg - sectionHeaderHeight + 'px';
        return(
            <>
            <div className='promo' style={{height: sectionPromoHeight, marginTop: sectionHeaderHeight}}> heelloo </div>
            </>
        )
    }
}
