import React from 'react';

function Footer(props) {
    return (
        <footer class="bg-white border-t border-gray-100">
            <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

                {/*Top Grid*/}
                <div class="grid grid-cols-2 gap-8 md:grid-cols-4">

                    {/* Blog */}
                    <div>
                        <h3 class="text-sm font-semibold text-gray-900">Blog</h3>
                        <ul class="mt-4 space-y-3 text-sm">
                            <li><a href="#" class="text-gray-600 hover:text-gray-900">Latest Posts</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-gray-900">Categories</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-gray-900">Popular Articles</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-gray-900">Archive</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 class="text-sm font-semibold text-gray-900">Company</h3>
                        <ul class="mt-4 space-y-3 text-sm">
                            <li><a href="#" class="text-gray-600 hover:text-gray-900">About</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-gray-900">Careers</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 class="text-sm font-semibold text-gray-900">Resources</h3>
                        <ul class="mt-4 space-y-3 text-sm">
                            <li><a href="#" class="text-gray-600 hover:text-gray-900">Writing Guide</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-gray-900">SEO Tips</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-gray-900">Blog Tools</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 class="text-sm font-semibold text-gray-900">Legal</h3>
                        <ul class="mt-4 space-y-3 text-sm">
                            <li><a href="#" class="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-gray-900">Terms</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-gray-900">Cookies</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div class="mt-10 border-t border-gray-100 pt-6 flex flex-col md:flex-row md:justify-between md:items-center">

                    <p class="text-xs text-gray-500">
                        © 2026 Blog App. All rights reserved.
                    </p>

                    {/* Socials */}
                    <div class="mt-4 md:mt-0 flex space-x-4">

                        {/* Twitter */}
                        <a href="#" class="text-gray-500 hover:text-gray-900">
                            <span class="sr-only">Twitter</span>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.25c7.54 0 11.67-6.25 11.67-11.67..." />
                            </svg>
                        </a>

                        {/* GitHub */}
                        <a href="#" class="text-gray-500 hover:text-gray-900">
                            <span class="sr-only">GitHub</span>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12.02..." />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a href="#" class="text-gray-500 hover:text-gray-900">
                            <span class="sr-only">Instagram</span>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.31 2c2.43 0 2.78.01 3.8.06..." />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;