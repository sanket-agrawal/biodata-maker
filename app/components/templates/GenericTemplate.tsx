"use client";

import React from 'react';
import { BiodataForm, FieldVisibility, defaultFieldVisibility } from '@/app/types/biodata';
import { TemplateConfig } from '@/app/types/template';
import { useLanguage } from '@/app/context/LanguageContext';

type Props = {
  data: BiodataForm;
  config: TemplateConfig;
  id?: string;
  visibility?: FieldVisibility;
  watermark?: boolean;
};

// SVG Motifs
const GaneshaIcon = ({ color }: { color: string }) => (
  <svg className="w-14 h-14 mx-auto" viewBox="0 0 100 100" fill={color}>
    <path d="M50 5 C30 5, 20 20, 20 40 C20 50, 25 60, 30 65 C28 75, 20 85, 10 90 C25 90, 35 80, 40 70 C45 72, 50 72, 55 70 C60 80, 70 90, 85 90 C75 85, 67 75, 65 65 C70 60, 75 50, 75 40 C75 20, 65 5, 50 5 Z M35 30 A 4 4 0 1 1 35 38 A 4 4 0 1 1 35 30 Z M65 30 A 4 4 0 1 1 65 38 A 4 4 0 1 1 65 30 Z M50 45 C45 45, 42 50, 42 55 C42 65, 50 70, 50 75 C50 78, 48 80, 45 80 C40 80, 38 75, 38 72 L32 72 C32 78, 38 86, 45 86 C52 86, 56 81, 56 75 C56 68, 48 62, 48 55 C48 52, 49 50, 50 50 Z" />
  </svg>
);

const OmIcon = ({ color }: { color: string }) => (
  <div className="text-4xl font-bold text-center leading-none" style={{ color }}>
    ॐ
  </div>
);

const SwastikIcon = ({ color }: { color: string }) => (
  <div className="text-4xl font-bold text-center leading-none" style={{ color }}>
    卐
  </div>
);

const LotusIcon = ({ color }: { color: string }) => (
  <svg className="w-12 h-12 mx-auto" viewBox="0 0 100 100" fill={color}>
    <path d="M50 15 C40 30, 25 35, 15 50 C25 50, 35 45, 50 65 C65 45, 75 50, 85 50 C75 35, 60 30, 50 15 Z M50 65 C35 70, 20 60, 5 65 C15 75, 35 85, 50 95 C65 85, 85 75, 95 65 C80 60, 65 70, 50 65 Z" />
  </svg>
);

const RadhaKrishnaIcon = ({ color }: { color: string }) => (
  <div className="text-center font-serif text-lg font-bold tracking-widest" style={{ color }}>
    ✦ || Shree Radha Krishna Prasanna || ✦
  </div>
);

// Filigree SVG Corner Graphic (matching attached PDF sample)
const FiligreeCorner = ({ color }: { color: string }) => (
  <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2">
    <path d="M 0 15 C 20 15, 30 5, 45 0 L 100 0" stroke={color} strokeWidth="2" />
    <path d="M 15 0 C 15 20, 5 30, 0 45 L 0 100" stroke={color} strokeWidth="2" />
    <path d="M 10 10 Q 35 10 35 35 Q 10 35 10 10" stroke={color} fill={`${color}20`} strokeWidth="1.5" />
    <circle cx="22" cy="22" r="6" fill={color} />
    <path d="M 25 5 C 40 10, 50 25, 40 40 C 25 50, 10 40, 5 25" stroke={color} strokeWidth="1.5" />
    <circle cx="42" cy="15" r="3" fill={color} />
    <circle cx="15" cy="42" r="3" fill={color} />
  </svg>
);

export default function GenericTemplate({ data, config, id, visibility = defaultFieldVisibility, watermark = false }: Props) {
  const { layout, colors, fonts, borderStyle, headerStyle, sectionStyle, symbol } = config;
  const { t } = useLanguage();

  // Container style for A4 page dimensions
  const containerStyle: React.CSSProperties = {
    width: '794px',
    minHeight: '1123px',
    backgroundColor: colors.background,
    color: colors.text,
    fontFamily: fonts.body,
    padding: '36px',
    position: 'relative',
    boxSizing: 'border-box',
    overflow: 'hidden',
  };

  // Render Symbol Header
  const renderSymbol = () => {
    if (symbol === 'none') return null;
    return (
      <div className="mb-2 text-center">
        {symbol === 'ganesha' && <GaneshaIcon color={colors.primary} />}
        {symbol === 'om' && <OmIcon color={colors.primary} />}
        {symbol === 'swastik' && <SwastikIcon color={colors.primary} />}
        {symbol === 'lotus' && <LotusIcon color={colors.primary} />}
        {symbol === 'radha-krishna' && <RadhaKrishnaIcon color={colors.primary} />}
      </div>
    );
  };

  // Section Header Styling
  const sectionHeaderStyles: Record<string, React.CSSProperties> = {
    simple: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '12px',
      borderBottom: `2px solid ${colors.border}`,
      paddingBottom: '4px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    boxed: {
      fontSize: '16px',
      fontWeight: 'bold',
      backgroundColor: colors.secondary,
      color: colors.primary,
      padding: '6px 14px',
      marginBottom: '12px',
      borderRadius: '4px',
      borderLeft: `4px solid ${colors.primary}`,
    },
    underlined: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: colors.primary,
      borderBottom: `2px solid ${colors.primary}`,
      paddingBottom: '4px',
      marginBottom: '12px',
      display: 'inline-block',
    },
    background: {
      fontSize: '16px',
      fontWeight: 'bold',
      backgroundColor: colors.primary,
      color: colors.headerText || '#ffffff',
      padding: '6px 16px',
      marginBottom: '12px',
      borderRadius: '20px',
      display: 'inline-block',
    },
    ribbon: {
      fontSize: '16px',
      fontWeight: 'bold',
      backgroundColor: colors.primary,
      color: colors.headerText || '#ffffff',
      padding: '6px 18px',
      marginBottom: '12px',
      borderRadius: '4px',
      boxShadow: `0 2px 6px ${colors.primary}40`,
      display: 'inline-block',
    },
    'gold-accent': {
      fontSize: '17px',
      fontWeight: 'bold',
      backgroundColor: colors.primary,
      color: colors.headerText || '#ffffff',
      padding: '6px 20px',
      marginBottom: '12px',
      borderRadius: '20px',
      boxShadow: `0 3px 8px ${colors.primary}30`,
      display: 'inline-block',
      letterSpacing: '1px',
    },
    'cursive-center': {
      fontSize: '24px',
      fontWeight: 'bold',
      color: colors.primary,
      textAlign: 'center',
      marginBottom: '16px',
      fontFamily: 'Playfair Display, Georgia, serif',
    },
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: '700',
    width: layout === 'circle-avatar-center' ? '32%' : layout === 'modern-sidebar' ? '100%' : '36%',
    color: colors.primary,
    padding: '4px 0',
  };

  const valueStyle: React.CSSProperties = {
    width: layout === 'circle-avatar-center' ? '68%' : layout === 'modern-sidebar' ? '100%' : '64%',
    padding: '4px 0',
    fontWeight: '600',
    color: colors.text,
  };

  const rowStyle: React.CSSProperties = {
    display: layout === 'modern-sidebar' ? 'block' : 'flex',
    marginBottom: '4px',
    fontSize: '14px',
    lineHeight: '1.5',
  };

  const renderField = (label: string, value: string, key?: keyof BiodataForm) => {
    if (!value) return null;
    if (key && visibility[key] === false) return null;

    return (
      <div style={rowStyle}>
        <span style={labelStyle}>{label} :</span>
        <span style={valueStyle}>{value}</span>
      </div>
    );
  };

  const renderSection = (title: string, content: React.ReactNode) => (
    <div style={{ marginBottom: '22px' }}>
      <div style={sectionHeaderStyles[sectionStyle] || sectionHeaderStyles.simple}>
        {title}
      </div>
      <div style={{ fontSize: '14px', lineHeight: '1.5', marginTop: '6px' }}>{content}</div>
    </div>
  );

  // Border Outer Style Wrapper
  const getBorderStyle = (): React.CSSProperties => {
    switch (borderStyle) {
      case 'gold-filigree-corners':
        return {
          border: `2px solid ${colors.primary}`,
          padding: '30px',
          position: 'relative',
        };
      case 'simple':
        return { border: `2px solid ${colors.border}`, padding: '24px' };
      case 'double':
        return { border: `5px double ${colors.border}`, padding: '24px' };
      case 'decorated':
        return {
          border: `3px solid ${colors.primary}`,
          outline: `2px dashed ${colors.accent}`,
          outlineOffset: '-8px',
          padding: '26px',
        };
      case 'ornate-gold':
        return {
          border: `4px double ${colors.primary}`,
          boxShadow: `inset 0 0 0 6px ${colors.secondary}, inset 0 0 0 9px ${colors.primary}`,
          padding: '28px',
        };
      default:
        return { padding: '24px' };
    }
  };

  return (
    <div id={id} style={containerStyle} className="shadow-2xl select-none">
      {/* Watermark for preview mode */}
      {watermark && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 z-50 transform -rotate-45">
          <span className="text-7xl font-bold tracking-widest uppercase border-4 border-current px-8 py-4">
            PREVIEW ONLY
          </span>
        </div>
      )}

      {/* Filigree Corner Artwork (for PDF reference template style) */}
      {(borderStyle === 'gold-filigree-corners' || borderStyle === 'ornate-gold') && (
        <>
          <div className="absolute top-4 left-4">
            <FiligreeCorner color={colors.primary} />
          </div>
          <div className="absolute top-4 right-4 transform rotate-90">
            <FiligreeCorner color={colors.primary} />
          </div>
          <div className="absolute bottom-4 left-4 transform -rotate-90">
            <FiligreeCorner color={colors.primary} />
          </div>
          <div className="absolute bottom-4 right-4 transform rotate-180">
            <FiligreeCorner color={colors.primary} />
          </div>
        </>
      )}

      <div style={{ ...getBorderStyle(), minHeight: '100%', height: '100%', position: 'relative' }}>
        
        {/* Sacred Icon Motif Header */}
        {renderSymbol()}

        {/* Sacred Line */}
        {data.godName && visibility.godName !== false && (
          <div className="text-center mb-4 font-bold text-sm tracking-widest uppercase" style={{ color: colors.primary }}>
            {data.godName}
          </div>
        )}

        {/* Circular Avatar Center Layout (Matching PDF Screenshot Page 1) */}
        {layout === 'circle-avatar-center' ? (
          <div>
            {/* Center Circular Photo Frame */}
            {visibility.photo !== false && data.photo && (
              <div className="text-center my-4">
                <img
                  src={data.photo}
                  alt="Candidate Photo"
                  className="w-48 h-48 rounded-full object-cover border-4 border-amber-600 shadow-xl mx-auto"
                />
              </div>
            )}

            {/* Candidate Name Centered Banner */}
            <div className="text-center my-6">
              <h1
                style={{
                  fontSize: '32px',
                  fontWeight: '800',
                  color: colors.primary,
                  fontFamily: fonts.heading,
                  letterSpacing: '0.5px',
                }}
              >
                {data.name}
              </h1>
            </div>

            {/* Personal Details List */}
            <div className="max-w-xl mx-auto space-y-1">
              {renderField(t.form.dob, data.dateOfBirth, 'dateOfBirth')}
              {renderField(t.form.pob, data.placeOfBirth, 'placeOfBirth')}
              {renderField(t.form.tob, data.timeOfBirth, 'timeOfBirth')}
              {renderField(t.form.rashi, data.rashi, 'rashi')}
              {renderField(t.form.bloodGroup, data.bloodGroup, 'bloodGroup')}
              {renderField(t.form.height, data.height, 'height')}
              {renderField(t.form.complexion, data.complexion, 'complexion')}
              {renderField(t.form.education, data.education, 'education')}
              {renderField(t.form.occupation, data.occupation, 'occupation')}
              {renderField(t.form.email, data.email, 'email')}
              {renderField(t.form.contactNo, data.contactNumber, 'contactNumber')}
              {renderField(t.form.salary, data.salary, 'salary')}
            </div>

            {/* Family & Contact Details */}
            <div className="mt-8 space-y-6 max-w-xl mx-auto">
              {renderSection(
                t.form.family,
                <>
                  {renderField(t.form.fatherName, data.fatherName, 'fatherName')}
                  {renderField(t.form.fatherOcc, data.fatherOccupation, 'fatherOccupation')}
                  {renderField(t.form.motherName, data.motherName, 'motherName')}
                  {renderField(t.form.motherOcc, data.motherOccupation, 'motherOccupation')}
                  {renderField(t.form.brothers, data.brothers, 'brothers')}
                  {renderField(t.form.sisters, data.sisters, 'sisters')}
                </>
              )}

              {renderSection(
                t.form.contact,
                <>
                  {renderField(t.form.contactPerson, data.contactPerson, 'contactPerson')}
                  {renderField(t.form.contactNo, data.contactNumber, 'contactNumber')}
                  {renderField(t.form.address, data.address, 'address')}
                </>
              )}
            </div>
          </div>
        ) : (
          /* Standard Layout Render */
          <div>
            {/* Header Title */}
            <div
              className="text-center mb-6 py-2.5"
              style={
                headerStyle === 'royal-banner'
                  ? {
                      backgroundColor: colors.headerBg || colors.primary,
                      color: colors.headerText || '#ffffff',
                      borderRadius: '6px',
                      boxShadow: `0 4px 12px ${colors.primary}35`,
                    }
                  : { borderBottom: `2px solid ${colors.primary}` }
              }
            >
              <h1
                style={{
                  fontSize: '28px',
                  fontWeight: '800',
                  fontFamily: fonts.heading,
                  margin: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                }}
              >
                {data.biodataTitle && visibility.biodataTitle !== false ? data.biodataTitle : t.template.biodata}
              </h1>
            </div>

            {/* Main Content */}
            <div style={{ display: 'flex', flexDirection: layout === 'modern-sidebar' ? 'row' : 'column', gap: '24px' }}>
              
              {/* Photo & Name */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: layout === 'modern-sidebar' ? 'column' : 'row',
                  width: layout === 'modern-sidebar' ? '34%' : '100%',
                  gap: '24px',
                  borderRight: layout === 'modern-sidebar' ? `2px solid ${colors.border}40` : 'none',
                  paddingRight: layout === 'modern-sidebar' ? '18px' : '0',
                  alignItems: 'center',
                }}
              >
                {visibility.photo !== false && data.photo && (
                  <div
                    style={{
                      width: layout === 'modern-sidebar' ? '100%' : '175px',
                      flexShrink: 0,
                      textAlign: 'center',
                    }}
                  >
                    <img
                      src={data.photo}
                      alt="Candidate Photo"
                      style={{
                        width: '165px',
                        height: '200px',
                        objectFit: 'cover',
                        border: `3px solid ${colors.primary}`,
                        borderRadius: '8px',
                        margin: '0 auto',
                        boxShadow: `0 6px 16px ${colors.primary}30`,
                      }}
                    />
                  </div>
                )}

                {layout !== 'modern-sidebar' && (
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2
                      style={{
                        fontSize: '26px',
                        fontWeight: '800',
                        color: colors.primary,
                        fontFamily: fonts.heading,
                        marginBottom: '4px',
                      }}
                    >
                      {data.name}
                    </h2>
                    {data.occupation && (
                      <p style={{ fontSize: '14px', color: colors.text, opacity: 0.9, fontWeight: '600' }}>
                        {data.occupation}
                      </p>
                    )}
                    {data.education && (
                      <p style={{ fontSize: '13px', color: colors.text, opacity: 0.8 }}>
                        {data.education}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Sections */}
              <div style={{ flex: 1 }}>
                {renderSection(
                  t.form.basicInfo,
                  <>
                    {renderField(t.form.fullName, data.name, 'name')}
                    {renderField(t.form.dob, data.dateOfBirth, 'dateOfBirth')}
                    {renderField(t.form.tob, data.timeOfBirth, 'timeOfBirth')}
                    {renderField(t.form.pob, data.placeOfBirth, 'placeOfBirth')}
                    {renderField(t.form.height, data.height, 'height')}
                    {renderField(t.form.religion, data.religious, 'religious')}
                    {renderField(t.form.caste, data.caste, 'caste')}
                    {renderField(t.form.subCaste, data.subCaste, 'subCaste')}
                    {renderField(t.form.gotra, data.gotra, 'gotra')}
                    {renderField(t.form.rashi, data.rashi, 'rashi')}
                    {renderField(t.form.nakshatra, data.nakshatra, 'nakshatra')}
                    {renderField(t.form.manglik, data.manglik, 'manglik')}
                    {renderField(t.form.complexion, data.complexion, 'complexion')}
                    {renderField(t.form.bloodGroup, data.bloodGroup, 'bloodGroup')}
                    {renderField(t.form.education, data.education, 'education')}
                    {renderField(t.form.occupation, data.occupation, 'occupation')}
                    {renderField(t.form.salary, data.salary, 'salary')}
                    {renderField(t.form.languages, data.languages, 'languages')}
                    {renderField(t.form.hobbies, data.hobbies, 'hobbies')}
                  </>
                )}

                {renderSection(
                  t.form.family,
                  <>
                    {renderField(t.form.fatherName, data.fatherName, 'fatherName')}
                    {renderField(t.form.fatherOcc, data.fatherOccupation, 'fatherOccupation')}
                    {renderField(t.form.motherName, data.motherName, 'motherName')}
                    {renderField(t.form.motherOcc, data.motherOccupation, 'motherOccupation')}
                    {renderField(t.form.brothers, data.brothers, 'brothers')}
                    {renderField(t.form.sisters, data.sisters, 'sisters')}
                  </>
                )}

                {renderSection(
                  t.form.contact,
                  <>
                    {renderField(t.form.contactPerson, data.contactPerson, 'contactPerson')}
                    {renderField(t.form.contactNo, data.contactNumber, 'contactNumber')}
                    {renderField(t.form.email, data.email, 'email')}
                    {renderField(t.form.address, data.address, 'address')}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
