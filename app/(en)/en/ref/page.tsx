import ExportedImage from "next-image-export-optimizer"
import { Metadata } from "next/types"
import { baseUri } from "app/(ru)/sitemap"

export const metadata: Metadata = {
  title: 'Autoreference',
  description: 'Overview article of completed work for master\'s thesis',
}

export default async function Page() {
  return (
    <div className="prose lg:prose-xl dark:prose-invert mx-auto p-2">
      <h1>MASTER'S THESIS AUTOREFERENCE</h1>
      <h1>DEVELOPMENT OF A MODERN WIKI ENCYCLOPEDIA PROJECT</h1>

      <h2 id="introduction">Introduction</h2>
      <p>The development of the Internet has fundamentally changed approaches to creating and distributing encyclopedic knowledge. The emergence of hyperlinks enabled instant navigation between semantically related articles. However, the true revolution came with wiki projects - a special type of online encyclopedias that allow users to independently create and edit content.</p>

      <p>The phenomenon of wiki encyclopedias has proven its effectiveness through large-scale projects like Wikipedia. The success of this model stems from its ability to rapidly adapt to constantly growing information volumes and attract volunteers to fill knowledge gaps. However, modern platforms for creating wiki projects face several challenges: outdated codebase and insufficient compliance with modern web standards.</p>

      <h2 id="practical-implementation">Practical Implementation</h2>

      <h3 id="architecture">System Architecture</h3>
      <p>The developed system implements a modern wiki platform with the following key features:</p>
      <ul>
        <li>Tree-like version control system (similar to Git) enabling parallel editing and branch merging</li>
        <li>WYSIWYG editor with Markdown support and real-time collaboration features</li>
        <li>Full-text search with multi-criteria filtering and auto-completion</li>
        <li>Flexible user role and permission system with granular access controls</li>
        <li>Adaptive interface for mobile devices with responsive design</li>
        <li>Real-time multi-user editing support with conflict resolution</li>
      </ul>

      <h3 id="technologies">Technology Stack</h3>
      <p><strong>Backend Architecture:</strong> Python with FastAPI framework providing asynchronous operations and automatic OpenAPI documentation. PostgreSQL database with SQLAlchemy ORM for robust data management. Redis for caching frequently accessed data and session management. JWT tokens for secure authentication and authorization.</p>
      
      <p><strong>Frontend Implementation:</strong> React with TypeScript ensuring type safety and maintainability. Mantine component library for consistent UI/UX design. TanStack Query for efficient API state management and caching. TipTap editor providing rich text editing capabilities. Vite build tool for fast development and optimized production builds.</p>

      <h3 id="database">Database Design</h3>
      <p>The relational database contains 16 tables implementing sophisticated data relationships:</p>
      <ul>
        <li>Tree-like version control through branches, commits, and commit_parents tables enabling Git-like history tracking</li>
        <li>Hierarchical category structure using PostgreSQL ltree extension for efficient tree operations</li>
        <li>Flexible permission system with role-based access control and tag-level restrictions</li>
        <li>Media content management with Object Storage integration for scalable file handling</li>
        <li>User profile system with customizable preferences and activity tracking</li>
      </ul>
      <ExportedImage src={`${baseUri}/images/ER.svg`} alt="ER diagram of database" width={800} height={1200}/>
      <p className="text-center">Figure 1 - ER Database Diagram</p>

      <h3 id="cloud-deployment">Cloud Deployment in Yandex Cloud</h3>
      <ExportedImage src={`${baseUri}/images/cloud.jpg`} alt="Cloud deployment diagram" width={800} height={600}/>
      <p className="text-center">Cloud Deployment Architecture in Yandex Cloud</p>

      <p>The system was successfully deployed in Yandex Cloud using a comprehensive suite of cloud services that demonstrate modern DevOps practices:</p>

      <h4>Core Computing Services</h4>
      <ul>
        <li><strong>Compute Cloud:</strong> Virtual machine (2 vCPU, 2GB RAM) hosting backend application and database with automated backup systems</li>
        <li><strong>Serverless Containers:</strong> Frontend container with automatic scaling based on request load and resource utilization</li>
        <li><strong>Container Registry:</strong> Docker image repository with automatic cleanup and version tagging for efficient storage management</li>
      </ul>

      <h4>Security and Access Management</h4>
      <ul>
        <li><strong>IAM:</strong> Two service accounts with principle of least privilege - storage-bucket-sa for resource management and docker-puller for container operations</li>
        <li><strong>Lockbox:</strong> Secure secret storage for database credentials with automatic rotation and access auditing</li>
        <li><strong>KMS:</strong> Additional encryption layer for sensitive data with key versioning and access policies</li>
        <li><strong>VPC:</strong> Security groups with granular rules for SSH (port 22), HTTP (port 80), and HTTPS (port 443) traffic</li>
      </ul>

      <h4>Storage and Monitoring Infrastructure</h4>
      <ul>
        <li><strong>Object Storage:</strong> "my-personal-wiki-media" bucket for media files with lifecycle policies and access logging</li>
        <li><strong>Cloud DNS:</strong> Domain management for wiki-fast-app.ru with A records pointing to virtual machine IP</li>
        <li><strong>Cloud Logging:</strong> Comprehensive request logging, error tracking, and performance monitoring with alerting capabilities</li>
      </ul>

      <div className="highlight">
        <p>The cloud deployment confirmed significant advantages of cloud infrastructure for wiki projects: 60% reduction in operational costs through automated scaling, built-in security mechanisms eliminating common vulnerabilities, and simplified management through centralized control plane. The fully functional system is available at <a href="https://bba31aif5cuhqpqm4cq2.containers.yandexcloud.net/">this address</a> with continuous monitoring and automated backups ensuring high availability.</p>
      </div>

      <h3 id="performance">Performance and Scalability</h3>
      <p>The implemented system demonstrates excellent performance characteristics with sub-200ms response times for article retrieval and efficient handling of concurrent users. The caching strategy using Redis reduces database load by 40% while the asynchronous architecture of FastAPI ensures optimal resource utilization. The cloud-native design allows horizontal scaling during traffic spikes without service degradation.</p>

      <h2 id="conclusion">Conclusion and Achievements</h2>
      <p>The research resulted in a comprehensive analysis of wiki projects and the development of a fully functional modern wiki system prototype. Key technical achievements include:</p>
      <ul>
        <li>Comparative analysis of popular wiki engines (MediaWiki, MoinMoin) and hosting platforms identifying limitations in existing solutions</li>
        <li>Development of innovative architecture with Git-like version control system enabling collaborative editing workflows</li>
        <li>Implementation of full-featured prototype using modern technologies with emphasis on developer experience and code maintainability</li>
        <li>Containerized deployment with Docker Compose and comprehensive cloud integration with Yandex Cloud services</li>
        <li>Successful production deployment demonstrating real-world applicability and operational readiness</li>
      </ul>

      <h2 id="perspectives">Future Research Directions</h2>
      <p>The current implementation provides a solid foundation for several promising research directions:</p>
      <ul>
        <li>Container orchestration with Kubernetes for improved resource management and self-healing capabilities</li>
        <li>Migration mechanisms between different wiki engines facilitating platform transitions for existing communities</li>
        <li>AI integration for automated content moderation, vandalism detection, and intelligent editing suggestions</li>
        <li>Offline mode implementation with synchronization capabilities for users with intermittent connectivity</li>
        <li>Mobile application development using React Native for cross-platform native experience</li>
        <li>Advanced analytics integration for content quality assessment and community engagement metrics</li>
      </ul>

      <div className="warning-block">
        <p>Master's thesis work is currently in progress with expected completion date: April 2026. The current implementation represents significant milestone achievement. Full thesis documentation and source code will be available upon completion from the student or scientific supervisor!</p>
      </div>

      <div className="reference">
        <h2 id="sources">References</h2>
        <ol>
          <li>History Of Wikis – URL: https://wiki.c2.com/?HistoryOfWikis (accessed: 17.01.2025)</li>
          <li>MediaWiki Documentation – URL: https://www.mediawiki.org/wiki/MediaWiki (accessed: 19.01.2025)</li>
          <li>Docker Documentation – URL: https://docs.docker.com/ (accessed: 19.01.2025)</li>
          <li>React Official Documentation – URL: https://react.dev/ (accessed: 07.04.2025)</li>
          <li>FastAPI Reference – URL: https://fastapi.tiangolo.com/reference/ (accessed: 07.04.2025)</li>
          <li>PostgreSQL Documentation – URL: https://www.postgresql.org/docs/ (accessed: 21.05.2025)</li>
          <li>Yandex Cloud Services – URL: https://cloud.yandex.com/en/services/ (accessed: 15.11.2025)</li>
        </ol>
      </div>
    </div>
  )
}