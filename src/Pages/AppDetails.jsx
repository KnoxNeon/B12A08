import React from 'react'
import { useParams } from 'react-router' // ← Fixed import (was 'react-router')
import useApps from '../Hooks/useApps'
import { Star, Download } from 'lucide-react' // Optional: for nice icons

const AppDetails = () => {
  const { id } = useParams()
  const { apps } = useApps()

  // Find the app safely
  const app = apps.find(a => String(a.id) === id)

  // Handle case when app is not found (e.g. wrong URL)
  if (!app) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">App Not Found</h1>
          <p className="text-gray-600 mt-2">The app you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Top Section - App Info */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* App Icon - Fixed size */}
            <div className="shrink-0">
              <img
                src={app.image}
                alt={app.title}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl object-cover shadow-lg"
              />
            </div>

            {/* App Details */}
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {app.title}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Developed by {app.companyName}
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  <span>{app.downloads}M+ Downloads</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>{app.ratingAvg} Rating</span>
                </div>
                <div>
                  <span>{app.reviews}K Reviews</span>
                </div>
                <div className="text-gray-500">
                  {app.size} MB
                </div>
              </div>

              {/* Install Button */}
              <button className="mt-6 px-10 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg">
                Install Now ({app.size} MB)
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="mt-10 text-gray-700 leading-relaxed text-sm sm:text-base">
            <h2 className="text-xl font-semibold mb-4">About this app</h2>
            <p className="whitespace-pre-line">{app.description}</p>
          </div>

          {/* Optional: Ratings breakdown */}
          {app.ratings && (
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4">Ratings & Reviews</h3>
              <div className="space-y-3">
                {app.ratings.slice().reverse().map((rating) => {
                  const maxCount = Math.max(...app.ratings.map(r => r.count))
                  const percentage = maxCount > 0 ? (rating.count / maxCount) * 100 : 0

                  return (
                    <div key={rating.name} className="flex items-center gap-3">
                      <span className="w-20 text-sm text-gray-600">{rating.name}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
                        <div
                          className="h-full bg-orange-400 transition-all duration-700"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="w-12 text-right text-sm text-gray-600">
                        {rating.count}K
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AppDetails