"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { getLinkCover } from "@pkg/hooks"
import { blog_links } from "@pkg/database"
import React from "react"

const ClientLink = React.memo(({ link }: { link: blog_links }) => {
  const cover = getLinkCover(link.uid)

  const handleClick = useCallback(async () => {
    //增加点击量
  }, [link.uid, link.clicks])

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={cover}
          alt={link.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 line-clamp-1">
            {link.name}
          </h3>
          <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-300">
            {link.clicks} 点击
          </span>
        </div>
        {link.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {link.description}
          </p>
        )}
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/30 via-indigo-50/30 to-purple-50/30 dark:from-blue-900/10 dark:via-indigo-900/10 dark:to-purple-900/10 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
    </motion.a>
  )
})

const LinksPage = React.memo(({ links }: { links: blog_links[] }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 lg:mb-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
      >
        友情链接
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
      >
        以下是我推荐的优质网站，点击即可访问，欢迎交换链接！
      </motion.p>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="grid w-full gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {links.length > 0 ? (
        links.map(link => <ClientLink key={link.uid} link={link} />)
      ) : (
        <div className="col-span-full text-center py-12">
          <div className="text-gray-500 dark:text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
            暂无友情链接
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            欢迎交换友情链接~
          </p>
        </div>
      )}
    </motion.div>
  </div>
))

export default LinksPage