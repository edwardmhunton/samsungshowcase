import React from 'react';


const ListBlock = ({action, navDefault, itemDefault, title, style, categoryId}) => (

               <div style={style} className="component">

               <div style={styles.list_title}>{title}</div>
               <ListItem categoryId={categoryId} style={styles} itemDefault={itemDefault} navDefault={navDefault} action={action} />

              </div>

)


export default ListBlock;
