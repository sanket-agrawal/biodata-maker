import { BiodataForm } from '@/app/types/biodata';

type Props = {
  data: BiodataForm;
};

export default function RoyalBlueClassicTemplate({ data }: Props) {
  return (
    <div
      id="biodata-template"
      style={{
        width: '794px',
        minHeight: '1123px',
        backgroundColor: '#ffffff',
        padding: '45px',
        fontFamily: 'Times New Roman, serif',
      }}
    >
      {/* Outer Border */}
      <div
        style={{
          border: '3px solid #1e3a8a',
          padding: '35px',
          minHeight: '1030px',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <h1
            style={{
              fontSize: '30px',
              margin: 0,
              letterSpacing: '3px',
              color: '#1e3a8a',
            }}
          >
            BIODATA
          </h1>
          <div
            style={{
              marginTop: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            {data.name || 'Your Name'}
          </div>
        </div>

        {/* Photo */}
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          {data.photo ? (
            <img
              src={data.photo}
              alt="Profile"
              style={{
                width: '180px',
                height: '220px',
                objectFit: 'cover',
                border: '3px solid #1e3a8a',
              }}
            />
          ) : (
            <div
              style={{
                width: '180px',
                height: '220px',
                margin: '0 auto',
                border: '3px solid #1e3a8a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#777',
              }}
            >
              Photo
            </div>
          )}
        </div>

        {/* Section Helper */}
        {(
          title: string,
          content: React.ReactNode
        ) => (
          <div style={{ marginBottom: '26px' }}>
            <div
              style={{
                borderBottom: '2px solid #1e3a8a',
                marginBottom: '12px',
                paddingBottom: '4px',
                fontSize: '17px',
                fontWeight: 'bold',
                color: '#1e3a8a',
              }}
            >
              {title}
            </div>
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              {content}
            </div>
          </div>
        )}

        {/* Personal Details */}
        {(
          'PERSONAL DETAILS',
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <td><strong>Date of Birth:</strong></td>
                <td>{data.dateOfBirth || '22/07/1997'}</td>
                <td><strong>Place of Birth:</strong></td>
                <td>{data.placeOfBirth || 'Dondaicha, Dhule'}</td>
              </tr>
              <tr>
                <td><strong>Height:</strong></td>
                <td>{data.height || '5 feet 10 inches'}</td>
                <td><strong>Caste:</strong></td>
                <td>{data.caste || 'Hindu'}</td>
              </tr>
              <tr>
                <td><strong>Gotra:</strong></td>
                <td>{data.gotra || 'Aaryn'}</td>
                <td><strong>Languages:</strong></td>
                <td>{data.languages || 'English, Hindi, Marathi'}</td>
              </tr>
              <tr>
                <td><strong>Education:</strong></td>
                <td colSpan={3}>{data.education || 'B.Tech'}</td>
              </tr>
              <tr>
                <td><strong>Occupation:</strong></td>
                <td colSpan={3}>{data.occupation || 'Software Engineer'}</td>
              </tr>
            </tbody>
          </table>
        )}

        {/* Family Details */}
        {(
          'FAMILY DETAILS',
          <>
            <div><strong>Father:</strong> {data.fatherName || 'Shri. Sanjay Agrawal'} — {data.fatherOccupation || 'Farmer'}</div>
            <div><strong>Mother:</strong> {data.motherName || 'Mamta'} — {data.motherOccupation || 'Homemaker'}</div>

            {data.grandfatherName && (
              <div>
                <strong>Grandfather:</strong> {data.grandfatherName} — {data.grandfatherOccupation}
              </div>
            )}

            {data.elderBrotherName && (
              <div>
                <strong>Elder Brother:</strong> {data.elderBrotherName} — {data.elderBrotherOccupation}
              </div>
            )}

            {data.youngerBrotherName && (
              <div>
                <strong>Younger Brother:</strong> {data.youngerBrotherName} — {data.youngerBrotherOccupation}
              </div>
            )}
          </>
        )}

        {/* Contact Details */}
        {(
          'CONTACT DETAILS',
          <>
            <div><strong>Contact Person:</strong> {data.contactPerson || 'Shri. Sanjay Agrawal'}</div>
            <div><strong>Contact Number:</strong> {data.contactNumber || '+91 XXXXX XXXXX'}</div>
            <div><strong>Email:</strong> {data.email || 'example@email.com'}</div>
          </>
        )}
      </div>
    </div>
  );
}
