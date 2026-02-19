"use client";

import { BiodataForm } from '@/app/types/biodata';
import { TemplateConfig } from '@/app/types/template';
import { useLanguage } from '@/app/context/LanguageContext';

type Props = {
  data: BiodataForm;
  config: TemplateConfig;
  id?: string;
};

export default function GenericTemplate({ data, config, id }: Props) {
  const { layout, colors, fonts, borderStyle, headerStyle, sectionStyle } = config;
  const { t } = useLanguage();

  // Base styles
  const containerStyle: React.CSSProperties = {
    width: '794px', // A4 width
    minHeight: '1123px', // A4 height
    backgroundColor: colors.background,
    color: colors.text,
    fontFamily: fonts.body,
    padding: '40px',
    position: 'relative',
    boxSizing: 'border-box',
  };

  const borderStyles: Record<string, React.CSSProperties> = {
    none: {},
    simple: { border: `2px solid ${colors.border}`, padding: '20px' },
    double: { border: `4px double ${colors.border}`, padding: '25px' },
    decorated: { 
      border: `2px solid ${colors.border}`, 
      padding: '25px',
      backgroundImage: `linear-gradient(45deg, ${colors.accent} 25%, transparent 25%, transparent 75%, ${colors.accent} 75%, ${colors.accent}), linear-gradient(45deg, ${colors.accent} 25%, transparent 25%, transparent 75%, ${colors.accent} 75%, ${colors.accent})`,
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 10px 10px',
      boxShadow: `inset 0 0 0 10px ${colors.background}`
    }
  };

  const headerStyles: Record<string, React.CSSProperties> = {
    simple: { textAlign: 'center', marginBottom: '30px' },
    boxed: { 
      textAlign: 'center', 
      marginBottom: '30px', 
      border: `2px solid ${colors.primary}`,
      padding: '15px',
      backgroundColor: colors.secondary 
    },
    underlined: { 
      textAlign: 'center', 
      marginBottom: '30px',
      borderBottom: `2px solid ${colors.primary}`,
      paddingBottom: '15px'
    },
    'centered-box': {
      textAlign: 'center',
      marginBottom: '30px',
      backgroundColor: colors.primary,
      color: colors.background,
      padding: '15px',
      borderRadius: '8px'
    }
  };

  const sectionHeaderStyles: Record<string, React.CSSProperties> = {
    simple: { 
      fontSize: '18px', 
      fontWeight: 'bold', 
      color: colors.primary,
      marginBottom: '15px',
      borderBottom: `1px solid ${colors.border}`,
      paddingBottom: '5px'
    },
    boxed: {
      fontSize: '18px',
      fontWeight: 'bold',
      backgroundColor: colors.secondary,
      color: colors.primary,
      padding: '8px 15px',
      marginBottom: '15px',
      borderRadius: '4px'
    },
    underlined: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: colors.primary,
      borderBottom: `2px solid ${colors.primary}`,
      paddingBottom: '5px',
      marginBottom: '15px',
      display: 'inline-block'
    },
    background: {
      fontSize: '18px',
      fontWeight: 'bold',
      backgroundColor: colors.primary,
      color: '#fff',
      padding: '8px 15px',
      marginBottom: '15px',
      borderRadius: '4px 4px 0 0'
    }
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: 'bold',
    width: layout === 'modern-sidebar' ? '100%' : '35%',
    color: colors.primary,
    padding: '6px 0',
    display: 'block'
  };

  const valueStyle: React.CSSProperties = {
    width: layout === 'modern-sidebar' ? '100%' : '65%',
    padding: '6px 0',
    display: 'block'
  };

  const rowStyle: React.CSSProperties = {
    display: layout === 'modern-sidebar' ? 'block' : 'flex',
    marginBottom: layout === 'modern-sidebar' ? '10px' : '0',
    borderBottom: layout === 'classic' ? `1px dashed ${colors.border}` : 'none'
  };

  const renderField = (label: string, value: string) => {
    if (!value) return null;
    return (
      <div style={rowStyle}>
        <span style={labelStyle}>{label}:</span>
        <span style={valueStyle}>{value}</span>
      </div>
    );
  };

  const renderSection = (title: string, content: React.ReactNode) => (
    <div style={{ marginBottom: '25px' }}>
      <h3 style={sectionHeaderStyles[sectionStyle]}>{title}</h3>
      <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
        {content}
      </div>
    </div>
  );

  return (
    <div id={id} style={containerStyle}>
      <div style={{ ...borderStyles[borderStyle], minHeight: '100%', height: '100%' }}>
        
        {/* Header */}
        <div style={headerStyles[headerStyle]}>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: 'bold', 
            fontFamily: fonts.heading,
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            {t.template.biodata}
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: layout === 'modern-sidebar' ? 'row' : 'column', gap: '30px' }}>
          
          {/* Top Section / Sidebar */}
          <div style={{ 
            display: 'flex', 
            flexDirection: layout === 'modern-sidebar' ? 'column' : 'row',
            width: layout === 'modern-sidebar' ? '30%' : '100%',
            gap: '20px',
            borderRight: layout === 'modern-sidebar' ? `2px solid ${colors.border}` : 'none',
            paddingRight: layout === 'modern-sidebar' ? '20px' : '0'
          }}>
            {/* Photo */}
            <div style={{ 
              width: layout === 'modern-sidebar' ? '100%' : '200px',
              flexShrink: 0,
              textAlign: 'center'
             }}>
              {data.photo ? (
                <img 
                  src={data.photo} 
                  alt="Profile" 
                  style={{
                    width: '180px',
                    height: '220px',
                    objectFit: 'cover',
                    border: `4px solid ${colors.primary}`,
                    borderRadius: borderStyle === 'none' ? '50%' : '4px',
                    margin: '0 auto'
                  }}
                />
              ) : (
                <div style={{
                  width: '180px',
                  height: '220px',
                  backgroundColor: colors.secondary,
                  border: `4px solid ${colors.primary}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.primary,
                  margin: '0 auto',
                  borderRadius: borderStyle === 'none' ? '50%' : '4px',
                }}>
                  Photo
                </div>
              )}
            </div>

            {/* Basic Info (Name) */}
            <div style={{ flexGrow: 1, paddingTop: '10px' }}>
              <h2 style={{ 
                fontSize: '28px', 
                fontWeight: 'bold', 
                fontFamily: fonts.heading,
                color: colors.primary,
                marginBottom: '10px',
                textAlign: layout === 'modern-sidebar' ? 'center' : 'left'
              }}>
                {data.name || 'Your Name'}
              </h2>
              {layout !== 'modern-sidebar' && (
                 <div style={{ fontSize: '16px' }}>
                    {renderField(t.form.dob, data.dateOfBirth)}
                    {renderField(t.form.timeOfBirth, '10:30 AM')} 
                    {renderField(t.form.placeOfBirth, data.placeOfBirth)}
                 </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div style={{ flexGrow: 1 }}>
            {renderSection(t.template.personalDetails, (
              <>
                 {layout === 'modern-sidebar' && renderField(t.form.dob, data.dateOfBirth)}
                 {layout === 'modern-sidebar' && renderField(t.form.placeOfBirth, data.placeOfBirth)}
                 {renderField(t.form.height, data.height)}
                 {renderField(t.form.caste, data.caste)}
                 {renderField(t.form.gotra, data.gotra)}
                 {renderField(t.form.education, data.education)}
                 {renderField(t.form.occupation, data.occupation)}
                 {renderField(t.form.languages, data.languages)}
                 {renderField(t.form.hobbies, data.hobbies)}
              </>
            ))}

            {renderSection(t.template.familyDetails, (
              <>
                {renderField(t.form.grandfatherName, data.grandfatherName)}
                {renderField(t.form.grandfatherOccupation, data.grandfatherOccupation)}
                {renderField(t.form.fatherName, data.fatherName)}
                {renderField(t.form.fatherOccupation, data.fatherOccupation)}
                {renderField(t.form.motherName, data.motherName)}
                {renderField(t.form.motherOccupation, data.motherOccupation)}
                {renderField(t.form.uncleName, data.uncleName)}
                {renderField(t.form.uncleOccupation, data.uncleOccupation)}
                {renderField(t.form.elderBrotherName, data.elderBrotherName)}
                {renderField(t.form.elderBrotherOccupation, data.elderBrotherOccupation)}
                {renderField(t.form.youngerBrotherName, data.youngerBrotherName)}
                {renderField(t.form.youngerBrotherOccupation, data.youngerBrotherOccupation)}
              </>
            ))}

            {renderSection(t.template.contactDetails, (
              <>
                {renderField(t.form.contactPerson, data.contactPerson)}
                {renderField(t.form.contactNumber, data.contactNumber)}
                {renderField(t.form.email, data.email)}
              </>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
