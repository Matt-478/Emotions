import React from 'react'

function AngerSection(props) {
  return (
    <section
      ref={props.ref}
      data-bgcolor={props.data_bgcolor}
      id={props.id}
    >
      Anger Section here
    </section>
  )
}

export default AngerSection
