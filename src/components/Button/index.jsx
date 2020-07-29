import React from 'react'
import './Button.scss'


export const BTN_WITH_PLUS_ICON = 'button-with-plus-icon'
export const BTN_NO_ICON =  'no-icon'

const buttonVariant = [BTN_NO_ICON,BTN_WITH_PLUS_ICON]
export const Button = React.forwardRef(
    (
        {children,id,className,variant,onClick,...rest},
        ref
) => {
        // const buttonClasses = [
        //     ...(variant !== BTN_NO_ICON ? [`Wishlist-Button`] : []),
        //     `Wishlist-Button__${variant}`
        //     ]

        const buttonContents = variant === BTN_WITH_PLUS_ICON ? (
            <>
                <div className="Wishlist-Button">
                    <svg className="svg-icon" viewBox="0 0 20 20">
                        <path
                            d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>
                    </svg>
                </div>
            </>
        ) : (
            children
        )

        return  (
          <button
              {...rest}
              id={id}
              ref={ref}
              onClick={onClick}
          >
              {buttonContents}
          </button>
        )
    })

export default Button

