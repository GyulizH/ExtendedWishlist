import React, { useState } from 'react'

//handle focus
const Editable = ({ text, type, keyId, isNew, children, ...props }) => {
  const [isEditing, setEditing] = useState(false)

  return (
    <section {...props}>
      {isEditing || isNew ? (
        <div>{children}</div>
      ) : (
        <div onClick={() => setEditing(true)}>
          <span>{text}</span>
        </div>
      )}
    </section>
  )
}

export default Editable
