import React from 'react';

const FileDownload = () => {
  const fileData = [
    { url: '/BB/docs/CC.sh', name: 'CC.sh' },
    { url: '/BB/docs/CC.zip', name: 'CC.zip' },
    { url: '/BB/docs/CC.dmg', name: 'CC.dmg' }
  ];

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <div>
      {fileData.map((file, index) => (
        <button key={index} onClick={() => handleDownload(file.url, file.name)}>
          Download {file.name}
        </button>
      ))}
    </div>
  );
};

export default FileDownload;
