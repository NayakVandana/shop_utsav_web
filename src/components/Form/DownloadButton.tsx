import React from 'react';
import { Download } from 'react-feather';
import { downloadReport } from '@/ui/common/functions';

const DownloadButton = React.memo(({ report_url, report_name }) => {
  const isDisabled = !report_url;

  return (
    <button
      type="button"
      aria-label={isDisabled ? "No report available to download" : `Download ${report_name || 'report'}`}
      title={isDisabled ? "No report available" : `Download ${report_name || 'report'}`}
      onClick={() => !isDisabled && downloadReport(report_url, report_name)}
      className={`btn btn-primary flex items-center gap-2 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ${
        isDisabled ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
      }`}
      disabled={isDisabled}
      tabIndex={0}
    >
      <Download size={18} />
      Download Report
    </button>
  );
});

export default DownloadButton;
