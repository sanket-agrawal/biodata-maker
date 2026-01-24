import { BiodataForm } from '@/app/types/biodata';

type Props = {
  data: BiodataForm;
};

export default function ClassicEleganceTemplate({ data }: Props) {
  return (
    <div 
      id="biodata-template" 
      style={{
        width: '794px', // A4 width in pixels at 96dpi
        minHeight: '1123px', // A4 height in pixels
        backgroundColor: '#ffffff',
        padding: '40px',
        fontFamily: 'Georgia, serif',
        position: 'relative'
      }}
    >
      {/* Outer Border */}
      <div style={{
        border: '4px double #b8860b',
        padding: '30px',
        minHeight: '1043px'
      }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            color: '#b8860b',
            margin: '0 0 8px 0',
            letterSpacing: '2px'
          }}>
            BIODATA
          </h1>
        </div>

        {/* Top Section: Photo + Basic Info */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '200px 1fr',
          gap: '30px',
          marginBottom: '25px'
        }}>
          {/* Photo */}
          <div>
            {data.photo ? (
              <img 
                src={data.photo} 
                alt="Profile" 
                style={{
                  width: '200px',
                  height: '250px',
                  objectFit: 'cover',
                  border: '4px solid #b8860b'
                }}
              />
            ) : (
              <div style={{
                width: '200px',
                height: '250px',
                backgroundColor: '#f5f5f5',
                border: '4px solid #b8860b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999'
              }}>
                Photo
              </div>
            )}
          </div>

          {/* Basic Info beside photo */}
          <div style={{ paddingTop: '10px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: '#b8860b',
              marginBottom: '15px',
              marginTop: '0'
            }}>
              {data.name || 'Your Name'}
            </h2>
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <div style={{ display: 'flex', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', width: '140px' }}>Date of Birth:</span>
                <span>{data.dateOfBirth || '22/07/1997'}</span>
              </div>
              <div style={{ display: 'flex' }}>
                <span style={{ fontWeight: 'bold', width: '140px' }}>Place of Birth:</span>
                <span>{data.placeOfBirth || 'Dondaicha, Dhule'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Details Section */}
        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: 'bold', 
            backgroundColor: '#fef3c7',
            padding: '8px 15px',
            margin: '0 0 15px 0',
            color: '#000'
          }}>
            PERSONAL DETAILS
          </h3>
          
          <div style={{ fontSize: '14px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '6px 0', width: '25%', fontWeight: 'bold' }}>Name:</td>
                  <td style={{ padding: '6px 0', width: '25%' }}>{data.name || 'Sanket Agrawal'}</td>
                  <td style={{ padding: '6px 0', width: '25%', fontWeight: 'bold' }}>Date of Birth:</td>
                  <td style={{ padding: '6px 0', width: '25%' }}>{data.dateOfBirth || '22/07/1997'}</td>
                </tr>
                <tr>
                  <td style={{ padding: '6px 0', fontWeight: 'bold' }}>Place of Birth:</td>
                  <td style={{ padding: '6px 0' }}>{data.placeOfBirth || 'Dondaicha, Dhule'}</td>
                  <td style={{ padding: '6px 0', fontWeight: 'bold' }}>Height:</td>
                  <td style={{ padding: '6px 0' }}>{data.height || '5 feet 10 inches'}</td>
                </tr>
                <tr>
                  <td style={{ padding: '6px 0', fontWeight: 'bold' }}>Caste:</td>
                  <td style={{ padding: '6px 0' }}>{data.caste || 'Hindu'}</td>
                  <td style={{ padding: '6px 0', fontWeight: 'bold' }}>Gotra:</td>
                  <td style={{ padding: '6px 0' }}>{data.gotra || 'Aaryn'}</td>
                </tr>
                <tr>
                  <td style={{ padding: '6px 0', fontWeight: 'bold' }}>Education:</td>
                  <td colSpan={3} style={{ padding: '6px 0' }}>
                    {data.education || 'B.Tech'}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '6px 0', fontWeight: 'bold' }}>Job:</td>
                  <td colSpan={3} style={{ padding: '6px 0' }}>
                    {data.occupation || 'Software Engineer'}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '6px 0', fontWeight: 'bold' }}>Languages:</td>
                  <td style={{ padding: '6px 0' }}>{data.languages || 'English, Hindi, Marathi'}</td>
                  <td style={{ padding: '6px 0', fontWeight: 'bold' }}>Hobby:</td>
                  <td style={{ padding: '6px 0' }}>{data.hobbies || 'Coding'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Family Details Section */}
        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: 'bold', 
            backgroundColor: '#fef3c7',
            padding: '8px 15px',
            margin: '0 0 15px 0',
            color: '#000'
          }}>
            FAMILY DETAILS
          </h3>
          
          <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
            {data.grandfatherName && (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', padding: '6px 0' }}>
                  <span style={{ fontWeight: 'bold' }}>Grandfather's Name:</span>
                  <span>{data.grandfatherName}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', padding: '6px 0' }}>
                  <span style={{ fontWeight: 'bold' }}>Grandfather's Occupation:</span>
                  <span>{data.grandfatherOccupation}</span>
                </div>
              </>
            )}
            
            <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', padding: '6px 0' }}>
              <span style={{ fontWeight: 'bold' }}>Father's Name:</span>
              <span>{data.fatherName || 'Shri.Sanjay Agrawal'}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', padding: '6px 0' }}>
              <span style={{ fontWeight: 'bold' }}>Father's Occupation:</span>
              <span>{data.fatherOccupation || 'Farmer'}</span>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', padding: '6px 0' }}>
              <span style={{ fontWeight: 'bold' }}>Mother's Name:</span>
              <span>{data.motherName || 'Mamta'}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', padding: '6px 0' }}>
              <span style={{ fontWeight: 'bold' }}>Mother's Occupation:</span>
              <span>{data.motherOccupation || 'Homemaker'}</span>
            </div>

            {data.uncleName && (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', padding: '6px 0' }}>
                  <span style={{ fontWeight: 'bold' }}>Uncle's Name:</span>
                  <span>{data.uncleName}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', padding: '6px 0' }}>
                  <span style={{ fontWeight: 'bold' }}>Uncle's Occupation:</span>
                  <span>{data.uncleOccupation}</span>
                </div>
              </>
            )}

            {data.elderBrotherName && (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', padding: '6px 0' }}>
                  <span style={{ fontWeight: 'bold' }}>Elder Brother's Name:</span>
                  <span>{data.elderBrotherName}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', padding: '6px 0' }}>
                  <span style={{ fontWeight: 'bold' }}>Elder Brother's Occupation:</span>
                  <span>{data.elderBrotherOccupation}</span>
                </div>
              </>
            )}

            {data.youngerBrotherName && (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', padding: '6px 0' }}>
                  <span style={{ fontWeight: 'bold' }}>Younger Brother's Name:</span>
                  <span>{data.youngerBrotherName}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', padding: '6px 0' }}>
                  <span style={{ fontWeight: 'bold' }}>Younger Brother's Occupation:</span>
                  <span>{data.youngerBrotherOccupation}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Contact Details Section */}
        <div>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: 'bold', 
            backgroundColor: '#fef3c7',
            padding: '8px 15px',
            margin: '0 0 15px 0',
            color: '#000'
          }}>
            CONTACT DETAILS
          </h3>
          
          <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', padding: '6px 0' }}>
              <span style={{ fontWeight: 'bold' }}>Contact Person:</span>
              <span>{data.contactPerson || 'Shri.Sanjay Agrawal'}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', padding: '6px 0' }}>
              <span style={{ fontWeight: 'bold' }}>Contact Number:</span>
              <span>{data.contactNumber || '(+) 222-222-2222'}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', padding: '6px 0' }}>
              <span style={{ fontWeight: 'bold' }}>Email:</span>
              <span>{data.email || 'sanket.agrawal@email.com'}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}