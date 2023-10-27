import React from 'react'
import DayCellItem from '../DayCellItem'
import DayInfoDetail from '../DayInfoDetail'

const DisplayMonthFull = (props) => {
    let fixIndex = 6
    if (props.indexCurrent <= 6) fixIndex = 6;
    else if (props.indexCurrent > 6 && props.indexCurrent <= 13) fixIndex = 13;
    else if (props.indexCurrent > 13 && props.indexCurrent <= 20) fixIndex = 20;
    else if (props.indexCurrent > 20 && props.indexCurrent <= 27) fixIndex = 27;
    else fixIndex = 33;

    return (
        <>
            {
                // props?.weatherData.map((dayData, index) => {
                //     return (
                //         <div key={index}>

                //             <DayCellItem data={dayData} onClick={() => props.onClick(index, dayData)} />
                //             {
                //                 props.checkActive && index === fixIndex && (
                //                     <DayInfoDetail data={props.item} onClick={(() => props.setCheckActive(index))}/>
                //                 )
                //             }

                //         </div>
                //     )
                // })
                props.weatherData.map((dayData, index) => (
                    <React.Fragment key={index}>

                        <DayCellItem data={dayData} onClick={() => props.onClick(index, dayData)} />
                        {
                            props.checkActive && index === fixIndex && (
                                <DayInfoDetail data={props.item} onClick={(() => props.setCheckActive(index))} />
                            )
                        }

                    </React.Fragment>
                ))
            }
        </>
    )
}

export default DisplayMonthFull