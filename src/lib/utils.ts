import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function exportToCSV<T extends Record<string, any>>(data: T[], filename: string) {
  if (!data.length) {
    return;
  }
  
  const headers = Object.keys(data[0]);
  const csvRows = [
    headers.join(','), // header row
    ...data.map(row => 
      headers.map(fieldName => 
        JSON.stringify(row[fieldName], (key, value) => value === null ? '' : value)
      ).join(',')
    )
  ];

  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}


export function exportToPDF(tableRef: React.RefObject<HTMLTableElement>, filename: string) {
  if (!tableRef.current) {
    console.error("Table element not found for PDF export.");
    return;
  }

  const input = tableRef.current;

  // Temporarily set background to white for canvas capture
  const originalBackgroundColor = document.documentElement.style.backgroundColor;
  const originalBodyBackgroundColor = document.body.style.backgroundColor;
  document.documentElement.style.backgroundColor = 'white';
  document.body.style.backgroundColor = 'white';


  html2canvas(input, {
    scale: 2,
    useCORS: true, 
    backgroundColor: '#ffffff'
  }).then((canvas) => {
    // Restore original background colors
    document.documentElement.style.backgroundColor = originalBackgroundColor;
    document.body.style.backgroundColor = originalBodyBackgroundColor;

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });
    
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save(filename);
  }).catch(error => {
    // Restore original background colors in case of an error
    document.documentElement.style.backgroundColor = originalBackgroundColor;
    document.body.style.backgroundColor = originalBodyBackgroundColor;
    console.error("Error generating PDF:", error);
  });
}
