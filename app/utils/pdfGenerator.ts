import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function generatePDF(elementId: string, filename: string = 'biodata.pdf') {
  try {
    const element = document.getElementById(elementId);
    
    if (!element) {
      throw new Error('Template element not found');
    }

    console.log('Generating PDF...');

    // Create a temporary container for rendering
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'fixed';
    tempContainer.style.left = '-9999px';
    tempContainer.style.top = '0';
    document.body.appendChild(tempContainer);

    // Clone the element
    const clone = element.cloneNode(true) as HTMLElement;
    tempContainer.appendChild(clone);

    // Wait for images to load
    const images = clone.getElementsByTagName('img');
    await Promise.all(
      Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    );

    // Convert to canvas
    const canvas = await html2canvas(clone, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: 794,
      height: 1123,
      windowWidth: 794,
      windowHeight: 1123,
    });

    // Clean up
    document.body.removeChild(tempContainer);

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // A4 dimensions in mm
    const pdfWidth = 210;
    const pdfHeight = 297;

    // Convert canvas to image
    const imgData = canvas.toDataURL('image/jpeg', 1.0);

    // Add image to PDF (full page)
    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);

    // Download
    pdf.save(filename);

    console.log('PDF generated successfully!');
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}

export async function generateImage(
  elementId: string, 
  format: 'png' | 'jpg' = 'png',
  filename?: string
) {
  try {
    const element = document.getElementById(elementId);
    
    if (!element) {
      throw new Error('Template element not found');
    }

    // Create temporary container
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'fixed';
    tempContainer.style.left = '-9999px';
    tempContainer.style.top = '0';
    document.body.appendChild(tempContainer);

    const clone = element.cloneNode(true) as HTMLElement;
    tempContainer.appendChild(clone);

    // Wait for images
    const images = clone.getElementsByTagName('img');
    await Promise.all(
      Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    );

    // Convert to canvas
    const canvas = await html2canvas(clone, {
      scale: 3, // Higher quality for images
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: format === 'jpg' ? '#ffffff' : null,
      width: 794,
      height: 1123,
    });

    // Clean up
    document.body.removeChild(tempContainer);

    // Download
    canvas.toBlob((blob) => {
      if (!blob) {
        throw new Error('Failed to generate image');
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename || `biodata.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, `image/${format}`, 0.95);

    return true;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
}