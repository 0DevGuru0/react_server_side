import React from 'react';

export default ({ staticContext={} })=>{
    staticContext.notFound = true
    return <h1>
        Oops,route not found.
    </h1>
}
