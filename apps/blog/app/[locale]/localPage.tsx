"use client"
import BlogLink from "#/components/BlogLink";
import OmsViewMarkdown from "#/components/Markdown";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { TypeAnimation } from "react-type-animation";

interface Props {
  totalCategories: number
  totalPosts: number
  latestPosts: any[]
}

const LocalPage = ({
  totalCategories,
  latestPosts,
  totalPosts
}: Props) => {
  const t = useTranslations("Index");

  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex items-center justify-center bg-[#1e1e1e] text-gray-100"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-indigo-500/5 rounded-full blur-3xl"
          />
        </div>
        <div className="text-center z-10 px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 drop-shadow-xl max-w-4xl mx-auto"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <TypeAnimation
              sequence={[
                t("hero.typing.0"), 2000,
                t("hero.typing.1"), 2000,
                t("hero.typing.2"), 2000,
                t("hero.typing.3"), 2000,
              ]}
              wrapper="h2"
              className="text-2xl md:text-3xl font-light text-gray-300"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-6 text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
          >
            {t("hero.description")}
          </motion.p>
        </div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10"
        >
          <p className="text-gray-400 text-lg animate-pulse">{t("hero.scrollDown")}</p>
          <div className="w-6 h-12 border-2 border-gray-500/50 rounded-full mx-auto mt-3">
            <motion.div
              className="w-2.5 h-2.5 bg-gray-300 rounded-full mx-auto mt-2"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.section>

      <section className="pt-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="text-center p-8 bg-gray-800/60 backdrop-blur rounded-xl border border-gray-700 transition-all duration-300">
              <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">{totalPosts}</h3>
              <p className="mt-3 text-gray-300">{t("stats.totalPosts")}</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="text-center p-8 bg-gray-800/60 backdrop-blur rounded-xl border border-gray-700 transition-all duration-300">
              <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">{totalCategories}</h3>
              <p className="mt-3 text-gray-300">{t("stats.totalCategories")}</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="text-center p-8 bg-gray-800/60 backdrop-blur rounded-xl border border-gray-700 transition-all duration-300">
              <h3 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">∞</h3>
              <p className="mt-3 text-gray-300">{t("stats.possibilities")}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold mb-8 text-center text-white"
          >
            {t("latestPosts.title")}
          </motion.h2>

          <div className="text-center mb-8">
            <BlogLink href="/" className="inline-block px-6 py-2 border border-gray-600 text-gray-300 rounded-full hover:bg-gray-700 hover:text-white transition">
              {t("latestPosts.viewAll")}
            </BlogLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <motion.div
                key={post.uid}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                transition={{ delay: index * 0.15 }}
                className="bg-gray-900/60 p-5 backdrop-blur border border-gray-700 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <BlogLink href={`/posts/${post.uid}`}>
                  <p className="text-sm text-gray-400 mb-3">
                    <BlogLink href={`categories/${post.categoriesId || "uncategorized"}`} className="text-blue-400 hover:underline">
                      {post.categories?.name || t("latestPosts.uncategorized")}
                    </BlogLink>
                    {" · "}
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                  <h3 className="text-xl font-semibold mb-3 text-white line-clamp-2">{post.title}</h3>
                  <p className="text-gray-400 line-clamp-3">
                    <OmsViewMarkdown
                      textContent={post.content}
                    />
                  </p>
                </BlogLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default LocalPage;