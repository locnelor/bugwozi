"use client";

import { useState, useMemo } from "react";
import {
    Card,
    Typography,
    Input,
    Space,
    Divider,
    Tag,
    Avatar,
    Row,
    Col,
    Button,
    Form,
    message,
    Breadcrumb,
    Empty,
    Segmented
} from "antd";
import {
    LinkOutlined,
    GlobalOutlined,
    HomeOutlined,
    UserOutlined,
    HeartOutlined,
    StarOutlined,
    SendOutlined,

    AppstoreOutlined,
    BookOutlined,
    CheckCircleOutlined,
    CodeOutlined,
    FileTextOutlined,
    MailOutlined,
    PictureOutlined,
    ReadOutlined,
    TeamOutlined,

    ToolOutlined
} from "@ant-design/icons";

import Link from "next/link";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

interface FriendlyLink {
    id: string;
    title: string;
    url: string;
    description: string;
    logo?: string;
    category: 'tech' | 'design' | 'tools' | 'resources' | 'community' | 'blog' | 'partner';
    featured?: boolean;
}

type CategoryType = "all" | "tech" | "design" | "tools" | "resources" | "community" | "blog" | "partner";

export default function LinksPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentCategory, setCurrentCategory] = useState<CategoryType>('all');
    const [form] = Form.useForm();
    const [submitting, setSubmitting] = useState(false);

    // 模拟友情链接数据
    const links: FriendlyLink[] = [
        {
            id: "1",
            title: "React.js Official",
            url: "https://reactjs.org",
            description: "A JavaScript library for building user interfaces. React makes it painless to create interactive UIs.",
            logo: "https://reactjs.org/favicon.ico",
            category: "tech",
            featured: true
        },
        {
            id: "2",
            title: "Next.js",
            url: "https://nextjs.org",
            description: "The React Framework for Production - Next.js gives you the best developer experience.",
            logo: "https://nextjs.org/static/favicon/favicon-32x32.png",
            category: "tech",
            featured: true
        },
        {
            id: "3",
            title: "Ant Design",
            url: "https://ant.design",
            description: "A design system for enterprise-level products. Create an efficient and enjoyable work experience.",
            logo: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
            category: "design",
            featured: true
        },
        {
            id: "4",
            title: "MDN Web Docs",
            url: "https://developer.mozilla.org",
            description: "Resources for developers, by developers. The best place to learn web technologies.",
            logo: "https://developer.mozilla.org/favicon-48x48.png",
            category: "resources",
            featured: true
        },
        {
            id: "5",
            title: "GitHub",
            url: "https://github.com",
            description: "GitHub is where over 100 million developers shape the future of software.",
            logo: "https://github.githubassets.com/favicons/favicon.png",
            category: "tools",
            featured: true
        },
        {
            id: "6",
            title: "CSS-Tricks",
            url: "https://css-tricks.com",
            description: "CSS-Tricks is created, written by, and maintained by Chris Coyier and a team of talented contributors.",
            logo: "https://css-tricks.com/apple-touch-icon.png",
            category: "blog"
        },
        {
            id: "7",
            title: "Dev.to",
            url: "https://dev.to",
            description: "Where programmers share ideas and help each other grow.",
            logo: "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
            category: "community",
            featured: true
        },
        {
            id: "8",
            title: "Stack Overflow",
            url: "https://stackoverflow.com",
            description: "Where developers learn, share, & build careers. Where developers gain knowledge share.",
            logo: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png",
            category: "community"
        },
        {
            id: "9",
            title: "Figma",
            url: "https://www.figma.com",
            description: "Figma connects everyone in the design process so teams can deliver better products, faster.",
            logo: "https://static.figma.com/app/icon/1/favicon.png",
            category: "design",
            featured: true
        },
        {
            id: "10",
            title: "CodePen",
            url: "https://codepen.io",
            description: "CodePen is a social development environment for front-end designers and developers.",
            logo: "https://cpwebassets.codepen.io/assets/favicon/apple-touch-icon-5ae1a0698dcc2402e9712f7d01ed509a57814f994c660df9f7a952f3060705ee.png",
            category: "tools"
        },
        {
            id: "11",
            title: "Frontend Masters",
            url: "https://frontendmasters.com",
            description: "Advance your skills with in-depth, modern front-end engineering courses.",
            logo: "https://frontendmasters.com/static-assets/FM_full_COLOR.png",
            category: "resources"
        },
        {
            id: "12",
            title: "TypeScript",
            url: "https://www.typescriptlang.org",
            description: "TypeScript is JavaScript with syntax for types. TypeScript is a strongly typed programming language that builds on JavaScript.",
            logo: "https://www.typescriptlang.org/favicon-32x32.png",
            category: "tech"
        },
        {
            id: "13",
            title: "Tailwind CSS",
            url: "https://tailwindcss.com",
            description: "Rapidly build modern websites without ever leaving your HTML.",
            logo: "https://tailwindcss.com/favicons/apple-touch-icon.png",
            category: "design",
            featured: true
        },
        {
            id: "14",
            title: "Vercel",
            url: "https://vercel.com",
            description: "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
            logo: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/180x180.png",
            category: "tools",
            featured: true
        },
        {
            id: "15",
            title: "Smashing Magazine",
            url: "https://www.smashingmagazine.com",
            description: "For web designers and developers. Techniques and strategies to help you build effective and appealing websites.",
            logo: "https://www.smashingmagazine.com/images/favicon/apple-touch-icon.png",
            category: "blog"
        },
        {
            id: "16",
            title: "Frontend Focus",
            url: "https://frontendfoc.us",
            description: "A once–weekly roundup of the best front-end news, articles and tutorials.",
            logo: "https://frontendfoc.us/wp-content/uploads/2021/06/cropped-fefdbc2f6ff5534b66a752358a964d63-32x32.png",
            category: "resources"
        },
        {
            id: "17",
            title: "CodeWars",
            url: "https://www.codewars.com",
            description: "Improve your skills by training with others on real code challenges.",
            logo: "https://www.codewars.com/packs/assets/logo.61192cf7.svg",
            category: "community"
        },
        {
            id: "18",
            title: "Digital Ocean",
            url: "https://www.digitalocean.com",
            description: "Simplify your cloud infrastructure with our developer-friendly products.",
            logo: "https://www.digitalocean.com/_next/static/media/favicon.22a34dd5.png",
            category: "partner",
            featured: true
        },
        {
            id: "19",
            title: "Web.dev",
            url: "https://web.dev",
            description: "Let's build the future of the web, together. Get the web's modern capabilities on your own sites.",
            logo: "https://web.dev/images/favicon-32x32.png",
            category: "resources",
            featured: true
        },
        {
            id: "20",
            title: "Cloudflare",
            url: "https://www.cloudflare.com",
            description: "Cloudflare is the foundation for your infrastructure, applications, and teams.",
            logo: "https://www.cloudflare.com/static/favicon/apple-touch-icon.png",
            category: "partner"
        }
    ];

    // 处理类别过滤逻辑
    const filteredLinks = useMemo(() => {
        return links.filter(link => {
            const matchesSearch = link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                link.description.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory = currentCategory === 'all' || link.category === currentCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, currentCategory, links]);

    // 特色链接
    const featuredLinks = useMemo(() => {
        return links.filter(link => link.featured);
    }, [links]);

    // 提交友链申请
    const handleSubmit = (values: any) => {
        setSubmitting(true);

        // 这里模拟API请求，实际项目中需要将数据发送到服务器
        setTimeout(() => {
            message.success('感谢您的提交！我们会尽快审核您的申请。');
            form.resetFields();
            setSubmitting(false);
        }, 1500);
    };

    // 获取每个分类的数量
    const getCategoryCount = (category: CategoryType) => {
        if (category === 'all') {
            return links.length;
        }
        return links.filter(link => link.category === category).length;
    };

    // 分类选项
    const categoryOptions = [
        {
            value: 'all',
            label: `全部 (${getCategoryCount('all')})`
        },
        {
            value: 'tech',
            label: `技术 (${getCategoryCount('tech')})`
        },
        {
            value: 'design',
            label: `设计 (${getCategoryCount('design')})`
        },
        {
            value: 'tools',
            label: `工具 (${getCategoryCount('tools')})`
        },
        {
            value: 'resources',
            label: `资源 (${getCategoryCount('resources')})`
        },
        {
            value: 'community',
            label: `社区 (${getCategoryCount('community')})`
        },
        {
            value: 'blog',
            label: `博客 (${getCategoryCount('blog')})`
        },
        {
            value: 'partner',
            label: `合作伙伴 (${getCategoryCount('partner')})`
        }
    ];

    // 获取分类标签颜色
    const getCategoryColor = (category: string) => {
        const colors: Record<string, string> = {
            tech: 'blue',
            design: 'magenta',
            tools: 'green',
            resources: 'gold',
            community: 'purple',
            blog: 'cyan',
            partner: 'volcano'
        };
        return colors[category] || 'default';
    };

    // 获取分类标签图标
    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'tech':
                return <span><CodeOutlined /></span>;
            case 'design':
                return <span><AppstoreOutlined /></span>;
            case 'tools':
                return <span><ToolOutlined /></span>;
            case 'resources':
                return <span><BookOutlined /></span>;
            case 'community':
                return <span><TeamOutlined /></span>;
            case 'blog':
                return <span><ReadOutlined /></span>;
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
                <Breadcrumb
                    className="mb-6"
                    items={[
                        { title: <Link href="/"><HomeOutlined /> 首页</Link> },
                        { title: "友情链接" }
                    ]}
                />

                <div className="mb-8">
                    <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                        <Title level={2} className="flex items-center m-0">
                            <LinkOutlined className="mr-2" /> 友情链接
                        </Title>

                        <Input.Search
                            placeholder="搜索友情链接..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            allowClear
                            style={{ width: 300 }}
                        />
                    </div>

                    <Paragraph className="text-gray-600 mb-6">
                        以下是我们精心挑选的一些优质网站资源，涵盖了前端开发、设计灵感、技术社区等多个领域。希望这些资源能够对您的学习和工作有所帮助！
                    </Paragraph>

                    <Segmented
                        options={categoryOptions}
                        value={currentCategory}
                        onChange={(value) => setCurrentCategory(value as CategoryType)}
                        block
                        className="mb-8"
                    />
                </div>

                {currentCategory === 'all' && !searchQuery && (
                    <div className="mb-10">
                        <div className="flex items-center mb-4">
                            <StarOutlined className="text-yellow-500 mr-2 text-xl" />
                            <Title level={3} style={{ margin: 0 }}>推荐站点</Title>
                        </div>
                        <Row gutter={[16, 16]} className="mb-6">
                            {featuredLinks.slice(0, 4).map(link => (
                                <Col xs={24} sm={12} md={8} lg={6} key={link.id}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="block">
                                        <Card
                                            hoverable
                                            className="h-full transition-all duration-300 hover:shadow-md"
                                            cover={
                                                <div className="flex items-center justify-center py-6 bg-gray-50">
                                                    {link.logo ? (
                                                        <img
                                                            src={link.logo}
                                                            alt={link.title}
                                                            className="h-16 w-16 object-contain"
                                                        />
                                                    ) : (
                                                        <GlobalOutlined style={{ fontSize: 48 }} className="text-gray-400" />
                                                    )}
                                                </div>
                                            }
                                        >
                                            <div className="flex flex-col h-full">
                                                <div className="mb-2 flex items-start justify-between">
                                                    <span className="font-medium text-lg line-clamp-1 flex-1">{link.title}</span>
                                                    <Tag color={getCategoryColor(link.category)} className="ml-2 flex-shrink-0">
                                                        {link.category === 'tech' ? '技术' :
                                                            link.category === 'design' ? '设计' :
                                                                link.category === 'tools' ? '工具' :
                                                                    link.category === 'resources' ? '资源' :
                                                                        link.category === 'community' ? '社区' :
                                                                            link.category === 'blog' ? '博客' : '合作'}
                                                    </Tag>
                                                </div>
                                                <p className="text-gray-500 text-sm line-clamp-2 flex-grow">
                                                    {link.description}
                                                </p>
                                            </div>
                                        </Card>
                                    </a>
                                </Col>
                            ))}
                        </Row>

                        <Divider />
                    </div>
                )}

                <div className="mb-12">
                    <div className="flex items-center mb-4">
                        <GlobalOutlined className="mr-2 text-xl text-blue-500" />
                        <Title level={3} style={{ margin: 0 }}>
                            {currentCategory === 'all' ? '所有链接' :
                                currentCategory === 'tech' ? '技术站点' :
                                    currentCategory === 'design' ? '设计站点' :
                                        currentCategory === 'tools' ? '工具站点' :
                                            currentCategory === 'resources' ? '资源站点' :
                                                currentCategory === 'community' ? '社区站点' :
                                                    currentCategory === 'blog' ? '博客站点' : '合作伙伴'}
                        </Title>
                    </div>

                    {filteredLinks.length > 0 ? (
                        <Row gutter={[16, 16]}>
                            {filteredLinks.map(link => (
                                <Col xs={24} sm={12} md={8} lg={6} key={link.id}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="block">
                                        <Card
                                            hoverable
                                            className="h-full transition-all duration-300 hover:shadow-md hover:border-blue-300"
                                            style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                        >
                                            <div className="flex items-center mb-3">
                                                {link.logo ? (
                                                    <Avatar
                                                        src={link.logo}
                                                        size={40}
                                                        className="mr-3 flex-shrink-0"
                                                    />
                                                ) : (
                                                    <Avatar
                                                        icon={<GlobalOutlined />}
                                                        size={40}
                                                        className="mr-3 flex-shrink-0"
                                                    />
                                                )}
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-medium text-base truncate">
                                                        {link.title}
                                                    </div>
                                                    <Tag color={getCategoryColor(link.category)} className="mt-1">
                                                        {link.category === 'tech' ? '技术' :
                                                            link.category === 'design' ? '设计' :
                                                                link.category === 'tools' ? '工具' :
                                                                    link.category === 'resources' ? '资源' :
                                                                        link.category === 'community' ? '社区' :
                                                                            link.category === 'blog' ? '博客' : '合作'}
                                                    </Tag>
                                                </div>
                                            </div>
                                            <p className="text-gray-500 text-sm line-clamp-3 flex-grow mb-2">
                                                {link.description}
                                            </p>
                                            <div className="text-xs text-gray-400 truncate flex items-center">
                                                <LinkOutlined className="mr-1" />
                                                <span className="truncate">{link.url}</span>
                                            </div>
                                        </Card>
                                    </a>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description="暂无符合条件的友情链接"
                            className="my-12"
                        />
                    )}
                </div>

                <Divider>
                    <HeartOutlined className="text-red-500 mx-2" />
                </Divider>

                <div className="mt-12">
                    <div className="flex items-center mb-6">
                        <Title level={3} className="m-0 flex items-center">
                            {/* <HandshakeOutlined className="mr-2" /> */}
                            +
                            申请友链
                        </Title>
                    </div>

                    <Row gutter={24}>
                        <Col xs={24} md={12}>
                            <Paragraph className="text-gray-600 mb-4">
                                我们非常欢迎优质网站申请加入我们的友情链接。如果您希望与我们交换链接，请填写右侧表单提交申请。
                            </Paragraph>

                            <Card title="友链要求" className="mb-6">
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircleOutlined className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                        <span>网站内容健康，无违法内容，无大量广告</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleOutlined className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                        <span>网站主题鲜明，内容原创，有一定更新频率</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleOutlined className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                        <span>网站已稳定运行3个月以上</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleOutlined className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                        <span>网站需已添加本站链接（名称：技术博客 | 网址：https://yourdomain.com）</span>
                                    </li>
                                </ul>
                            </Card>

                            <Card title="我们的信息">
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <GlobalOutlined className="mr-2 text-blue-500" />
                                        <span className="font-medium">网站名称：</span>
                                        <span className="ml-1">技术博客</span>
                                    </div>
                                    <div className="flex items-center">
                                        <LinkOutlined className="mr-2 text-blue-500" />
                                        <span className="font-medium">网站地址：</span>
                                        <span className="ml-1">https://yourdomain.com</span>
                                    </div>
                                    <div className="flex items-start">
                                        <FileTextOutlined className="mr-2 mt-1 text-blue-500" />
                                        <span className="font-medium">网站描述：</span>
                                        <span className="ml-1">分享前端开发、设计和技术相关的原创内容，致力于帮助开发者成长。</span>
                                    </div>
                                    <div className="flex items-center">
                                        <PictureOutlined className="mr-2 text-blue-500" />
                                        <span className="font-medium">网站Logo：</span>
                                        <span className="ml-1">https://yourdomain.com/logo.png</span>
                                    </div>
                                </div>
                            </Card>
                        </Col>

                        <Col xs={24} md={12}>
                            <Card title="申请表单" className="h-full">
                                <Form
                                    form={form}
                                    layout="vertical"
                                    onFinish={handleSubmit}
                                    requiredMark={false}
                                >
                                    <Form.Item
                                        name="siteName"
                                        label="网站名称"
                                        rules={[{ required: true, message: '请输入您的网站名称' }]}
                                    >
                                        <Input placeholder="请输入您的网站名称" prefix={<GlobalOutlined />} />
                                    </Form.Item>

                                    <Form.Item
                                        name="siteUrl"
                                        label="网站地址"
                                        rules={[
                                            { required: true, message: '请输入您的网站地址' },
                                            { type: 'url', message: '请输入有效的网址' }
                                        ]}
                                    >
                                        <Input placeholder="https://example.com" prefix={<LinkOutlined />} />
                                    </Form.Item>

                                    <Form.Item
                                        name="siteDescription"
                                        label="网站描述"
                                        rules={[
                                            { required: true, message: '请输入网站描述' },
                                            { max: 100, message: '描述不能超过100个字符' }
                                        ]}
                                    >
                                        <TextArea
                                            placeholder="请简短描述您的网站内容和特色（100字以内）"
                                            rows={3}
                                            showCount
                                            maxLength={100}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="siteLogo"
                                        label="网站Logo"
                                        rules={[
                                            { type: 'url', message: '请输入有效的网址', warningOnly: true }
                                        ]}
                                    >
                                        <Input placeholder="https://example.com/logo.png" prefix={<PictureOutlined />} />
                                    </Form.Item>

                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Form.Item
                                                name="ownerName"
                                                label="站长昵称"
                                                rules={[{ required: true, message: '请输入您的昵称' }]}
                                            >
                                                <Input prefix={<UserOutlined />} />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                name="contactEmail"
                                                label="联系邮箱"
                                                rules={[
                                                    { required: true, message: '请输入您的邮箱' },
                                                    { type: 'email', message: '请输入有效的邮箱地址' }
                                                ]}
                                            >
                                                <Input prefix={<MailOutlined />} />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Form.Item
                                        name="message"
                                        label="留言"
                                    >
                                        <TextArea
                                            placeholder="您想说的话（可选）"
                                            rows={3}
                                        />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            block
                                            icon={<SendOutlined />}
                                            loading={submitting}
                                        >
                                            提交申请
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}