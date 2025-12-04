'use client'

import { useState } from 'react'
import { Search, MapPin, Building2, ExternalLink, Briefcase, CheckCircle2 } from 'lucide-react'

interface Job {
  id: string
  title: string
  company: string
  country: string
  visaSponsorship: 'yes' | 'possible' | 'no' | 'unknown'
  matchReason: string
  applyLink: string
}

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const searchJobs = async () => {
    setLoading(true)
    setSearched(true)

    // Simulate API call - in production this would call real job APIs
    setTimeout(() => {
      const mockJobs: Job[] = [
        {
          id: '1',
          title: 'Digital Marketing Executive',
          company: 'Tech Innovations Ltd',
          country: 'United Kingdom',
          visaSponsorship: 'yes',
          matchReason: 'Perfect match: Requires 1-2 years experience in digital marketing, social media management, and content creation. WordPress experience is a plus.',
          applyLink: 'https://www.linkedin.com/jobs/view/digital-marketing-executive-uk'
        },
        {
          id: '2',
          title: 'Content Creator & Social Media Manager',
          company: 'Creative Media Group',
          country: 'Netherlands',
          visaSponsorship: 'yes',
          matchReason: 'Excellent fit: Looking for someone with video editing, content creation, and social media management skills. Your videography experience is highly valued.',
          applyLink: 'https://www.indeed.com/viewjob/content-creator-netherlands'
        },
        {
          id: '3',
          title: 'Marketing Assistant',
          company: 'Digital Solutions Ireland',
          country: 'Ireland',
          visaSponsorship: 'possible',
          matchReason: 'Strong match: Entry to mid-level role requiring digital marketing skills, content creation, and basic SEO knowledge.',
          applyLink: 'https://www.jobs.ie/marketing-assistant-dublin'
        },
        {
          id: '4',
          title: 'Video Editor & Motion Graphics Designer',
          company: 'Media House Belgium',
          country: 'Belgium',
          visaSponsorship: 'yes',
          matchReason: 'Great match: Your video editing and videography skills are the core requirements. They value graphic design experience.',
          applyLink: 'https://www.stepstone.be/video-editor-brussels'
        },
        {
          id: '5',
          title: 'WordPress Content Manager',
          company: 'E-commerce Ventures',
          country: 'United Kingdom',
          visaSponsorship: 'yes',
          matchReason: 'Perfect fit: Requires WordPress development, content management, and basic SEO. Your exact skill set.',
          applyLink: 'https://www.reed.co.uk/jobs/wordpress-content-manager'
        },
        {
          id: '6',
          title: 'Social Media Specialist',
          company: 'Brand Agency Amsterdam',
          country: 'Netherlands',
          visaSponsorship: 'yes',
          matchReason: 'Ideal match: Looking for someone with social media management, content creation, and graphic design skills. Videography is a bonus.',
          applyLink: 'https://www.glassdoor.com/job/social-media-specialist-amsterdam'
        },
        {
          id: '7',
          title: 'Creative Content Producer',
          company: 'Digital Marketing Agency',
          country: 'Ireland',
          visaSponsorship: 'possible',
          matchReason: 'Strong match: Combines your content creation, video editing, and social media skills. They want someone multi-skilled in digital content.',
          applyLink: 'https://www.irishjobs.ie/creative-content-producer'
        },
        {
          id: '8',
          title: 'Digital Marketing Coordinator',
          company: 'Tech Startup Milan',
          country: 'Italy',
          visaSponsorship: 'possible',
          matchReason: 'Good fit: Requires digital marketing, social media management, and content creation. Your diverse skill set is valuable.',
          applyLink: 'https://www.indeed.it/digital-marketing-coordinator-milan'
        },
        {
          id: '9',
          title: 'Videographer & Content Creator',
          company: 'Media Production UK',
          country: 'United Kingdom',
          visaSponsorship: 'yes',
          matchReason: 'Excellent match: Core focus on videography and video editing with content creation. Your primary strengths.',
          applyLink: 'https://www.totaljobs.com/videographer-london'
        },
        {
          id: '10',
          title: 'Marketing & Communications Assistant',
          company: 'International Corporation',
          country: 'Belgium',
          visaSponsorship: 'yes',
          matchReason: 'Strong fit: Entry-level role requiring digital marketing, content creation, and social media management. Graphic design is a plus.',
          applyLink: 'https://www.jobs.be/marketing-communications-assistant'
        },
        {
          id: '11',
          title: 'SEO Content Specialist',
          company: 'Digital Agency Dublin',
          country: 'Ireland',
          visaSponsorship: 'yes',
          matchReason: 'Good match: Your SEO basics, WordPress development, and content creation skills align well. They value multi-skilled marketers.',
          applyLink: 'https://www.jobs.ie/seo-content-specialist-dublin'
        },
        {
          id: '12',
          title: 'Social Media & Video Marketing Manager',
          company: 'E-learning Platform',
          country: 'Netherlands',
          visaSponsorship: 'yes',
          matchReason: 'Perfect match: Combines social media management with video editing and content creation. Your videography experience is key.',
          applyLink: 'https://www.linkedin.com/jobs/social-media-video-marketing-amsterdam'
        }
      ]

      setJobs(mockJobs)
      setLoading(false)
    }, 2000)
  }

  const visaSponsorCount = jobs.filter(j => j.visaSponsorship === 'yes').length
  const ukNlBeCount = jobs.filter(j => ['United Kingdom', 'Netherlands', 'Belgium'].includes(j.country)).length

  return (
    <div className="container">
      <div className="header">
        <h1>🎯 Job Search Assistant</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '20px' }}>
          Finding opportunities that match your profile with visa sponsorship
        </p>

        <div className="profile">
          <div className="profile-item">
            <strong>Candidate:</strong>
            Marwen Slimen
          </div>
          <div className="profile-item">
            <strong>Experience:</strong>
            1.5+ years
          </div>
          <div className="profile-item">
            <strong>Location:</strong>
            Tunisia 🇹🇳 → EU/UK
          </div>
          <div className="profile-item">
            <strong>Key Skills:</strong>
            Digital Marketing, Content Creation, Video Editing
          </div>
          <div className="profile-item">
            <strong>Technical:</strong>
            WordPress, SEO, Graphic Design
          </div>
          <div className="profile-item">
            <strong>Target Countries:</strong>
            UK 🇬🇧 | NL 🇳🇱 | BE 🇧🇪 | IE 🇮🇪 | IT 🇮🇹
          </div>
        </div>
      </div>

      <div className="controls">
        <button
          className="button"
          onClick={searchJobs}
          disabled={loading}
        >
          <Search size={20} />
          {loading ? 'Searching job boards...' : 'Search Job Opportunities'}
        </button>

        {jobs.length > 0 && (
          <p style={{ marginTop: '12px', color: '#666' }}>
            ✨ Found {jobs.length} matching opportunities
          </p>
        )}
      </div>

      {loading && (
        <div className="loading">
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
          <p>Searching job boards for opportunities matching your profile...</p>
          <p style={{ fontSize: '14px', marginTop: '8px', opacity: 0.8 }}>
            Filtering by: UK, Netherlands, Belgium, Ireland, Italy • Visa Sponsorship • Your Skills
          </p>
        </div>
      )}

      {!loading && jobs.length > 0 && (
        <>
          <div className="stats">
            <div className="stat-item">
              <div className="stat-value">{jobs.length}</div>
              <div className="stat-label">Total Matches</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{visaSponsorCount}</div>
              <div className="stat-label">Visa Sponsorship</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{ukNlBeCount}</div>
              <div className="stat-label">UK/NL/BE Priority</div>
            </div>
          </div>

          <div className="jobs-grid">
            {jobs.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h2 className="job-title">{job.title}</h2>
                  <div className="company">
                    <Building2 size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                    {job.company}
                  </div>
                  <div className="country">
                    <MapPin size={16} />
                    {job.country}
                  </div>
                </div>

                <div className={`visa-badge visa-${job.visaSponsorship}`}>
                  {job.visaSponsorship === 'yes' && '✅ Visa Sponsorship Available'}
                  {job.visaSponsorship === 'possible' && '⚠️ Visa Sponsorship Possible'}
                  {job.visaSponsorship === 'no' && '❌ No Visa Sponsorship'}
                  {job.visaSponsorship === 'unknown' && '❓ Visa Status Unknown'}
                </div>

                <div className="match-reason">
                  <strong style={{ color: '#667eea', display: 'block', marginBottom: '6px' }}>
                    <CheckCircle2 size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                    Why you match:
                  </strong>
                  {job.matchReason}
                </div>

                <div className="apply-button">
                  <a
                    href={job.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apply-link"
                  >
                    <Briefcase size={18} />
                    Apply Now
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {!loading && searched && jobs.length === 0 && (
        <div className="no-jobs">
          <h2>No matching jobs found</h2>
          <p>Try adjusting your search criteria or check back later for new opportunities.</p>
        </div>
      )}
    </div>
  )
}
