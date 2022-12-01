import Company from './company'
import DateComponent from './date'
import ExperienceTitle from './experience-title'

export default function ExperienceHeader({ title, date, company }) {
  return (
    <>
      <ExperienceTitle>{title}</ExperienceTitle>
      <div className="max-w-2xl mx-auto">
        <div className="hidden md:block md:mb-12">
          {company && <Company name={company.name} picture={company.picture} />}
        </div>
        <div className="mb-6 text-lg">
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  )
}