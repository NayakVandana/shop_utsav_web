import React from 'react'

const OpenInNewTabLink = React.memo(function OpenInNewTabLink({ url }) {
    if (!url) return null;

    return (
        <button
            onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
            className="px-3 py-1  btn btn-outline  btn-primary border  btn-xs "
        >
            View
        </button>
    );
});

export default OpenInNewTabLink;
